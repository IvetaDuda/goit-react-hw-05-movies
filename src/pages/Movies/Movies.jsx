import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../server/api';
import MoviesList from 'components/MoviesList';
import ErrorMessage from 'components/ErrorMessage';
import SearchFilms from 'components/SearchFilms';
import Loader from 'components/Loader';

const statuss = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [name, setName] = useState('');
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(statuss.IDLE);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    (async () => {
      try {
        if (!query) {
          return;
        }
        setStatus(statuss.PENDING);
        api.fetchSearchFilms(query).then(data => {
          const filmsInfo = data.results.map(
            ({ id, original_title, poster_path }) => ({
              id,
              original_title,
              poster_path,
            })
          );
          if (filmsInfo.length === 0) {
            setStatus(statuss.REJECTED);
            setFilms([]);
            return;
          } else {
            setFilms(data.results);
            setStatus(statuss.RESOLVE);
          }
        });
      } catch (error) {
        toast.error(error.message);
        setStatus(statuss.REJECTED);
      }
    })();
  }, [query]);

  const hendelNameChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const hendelSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      return toast.error('Please enter a name to search!');
    }
    setSearchParams({ query: name });
    setName('');
  };

  return (
    <div>
      <SearchFilms
        hendelSubmit={hendelSubmit}
        hendelNameChange={hendelNameChange}
        name={name}
      />
      {status === statuss.PENDING && <Loader />}
      {status === statuss.RESOLVE && <MoviesList films={films} />}
      {status === statuss.REJECTED && <ErrorMessage query={query} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};
Movies.prototype = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
  query: PropTypes.string.isRequired,
};
export default Movies;
