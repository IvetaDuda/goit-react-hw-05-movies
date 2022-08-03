import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'server/api';
import defaultImg from '../../icons/defaultImg.png';
import css from './Cast.module.css';

const Cast = () => {
  const movieId = useOutletContext();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    api.fetchCastActors(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <ul className={css.CastList}>
      {actors.map(({ profile_path, name, id, character }) => (
        <li key={id}>
          {profile_path ? (
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="200"
            />
          ) : (
            <img
              className={css.defaultImg}
              src={defaultImg}
              alt={name}
              width="200"
              height="300"
            />
          )}
          <h2 className={css.title}>{name}</h2>
          <p className={css.Character}>Character:</p>
          <span className={css.CharacterItem}>{character}</span>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
