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

const api = {
  fetchSearchFilms,
  fetchTrendingMovie,
};
export default api;
