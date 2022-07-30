import css from './TrendingMovies.module.css';

const TrendingMovies = ({ movies }) => {
  return (
    <ul className={css.trendingFilmList}>
      {movies.map(({ id, original_title, poster_path, name }) => {
        const imgPoster = 'https://image.tmdb.org/t/p/w500' + poster_path;
        return (
          <li key={id} className={css.trendingFilmCard}>
            <img
              src={imgPoster}
              alt={original_title}
              className={css.trendingFilmImage}
            />
            <h2 className={css.trendingTitle}>{original_title}</h2>
          </li>
        );
      })}
    </ul>
  );
};
export default TrendingMovies;
