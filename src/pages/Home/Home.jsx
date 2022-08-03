import { useState, useEffect } from 'react';
import api from '../../server/api';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

import MoviesList from 'components/MoviesList';
import Title from 'components/Title';

const Home = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        api.fetchTrendingMovie().then(data => setMovie(data.results));
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <Title />
      <MoviesList films={movies} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
Home.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
export default Home;
