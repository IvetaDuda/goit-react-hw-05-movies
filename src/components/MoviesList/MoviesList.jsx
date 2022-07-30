import css from './MoviesList.module.css';

const MoviesList = ({ films }) => {
  return (
    <ul className={css.film__list}>
      {films.map(({ id, original_title, poster_path }) => {
        const imgPoster = 'https://image.tmdb.org/t/p/w500' + poster_path;
        return (
          <li key={id} className={css.filmCard__wrap}>
            <img
              className={css.film__image}
              src={imgPoster}
              alt={original_title}
            />
            <div className={css.info}>
              <h2 className={css.info__title}>{original_title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
