import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.film__list}>
      {films.map(({ id, original_title, poster_path, original_name }) => {
        const imgPoster = 'https://image.tmdb.org/t/p/w500' + poster_path;
        return (
          <li key={id} className={css.filmCard__wrap}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                className={css.film__image}
                src={imgPoster}
                alt={original_title}
              />
            </Link>
            <div className={css.info}>
              {original_title ? (
                <h2 className={css.info__title}>{original_title}</h2>
              ) : (
                <h2 className={css.info__title}>{original_name}</h2>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
