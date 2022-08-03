import { useState, useEffect } from 'react';
import api from '../../server/api';
import { ToastContainer, toast } from 'react-toastify';

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
export default Home;
