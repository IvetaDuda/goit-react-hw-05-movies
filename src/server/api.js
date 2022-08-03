import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'c38a13f755f1c1fdbaffd32cebe7bc69';

async function fetchSearchFilms(query) {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
}

async function fetchTrendingMovie() {
  const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return response.data;
}

async function fetchDetailsMovie(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
}

async function fetchCastActors(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

async function fetchReviews(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
}

const api = {
  fetchSearchFilms,
  fetchTrendingMovie,
  fetchDetailsMovie,
  fetchCastActors,
  fetchReviews,
};
export default api;
