import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import api from 'server/api';
import css from './MovieDetails.module.css';
import defaultImg from '../../icons/defaultImg.png';
import { ReactComponent as IconArrow } from '../../icons/iconArrow.svg';
import { toast } from 'react-toastify';

const MovieDetails = () => {
  const [detalis, setDetalis] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (!movieId) {
          return;
        }
        api.fetchDetailsMovie(movieId).then(data => setDetalis(data));
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  const Click = () => {
    if (!detalis) {
      return;
    } else {
      scrollToMoreBtn();
    }
  };

  const GoBack = () => {
    navigate(location.state?.from || '/movies');
  };

  const scrollToMoreBtn = () => {
    Scroll.animateScroll.scrollMore(500);
  };
  return (
    <div className={css.container}>
      <button className={css.btnGoBack} onClick={GoBack}>
        <IconArrow className={css.iconArrow} />
      </button>
      {detalis && (
        <>
          <div className={css.containerMovieDetails}>
            {detalis.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${detalis.poster_path}`}
                alt={detalis.original_title}
                width="400"
                className={css.imgActor}
              />
            ) : (
              <img
                src={defaultImg}
                alt={detalis.original_title}
                width="400"
                className={css.imgActor}
              />
            )}

            <div className={css.info}>
              <h2 className={css.name}>
                {detalis.original_title} ({detalis.release_date.slice(0, 4)})
              </h2>

              <h3 className={css.scope}>
                User score:
                <span className={css.scopeItem}>
                  {Math.round(detalis.vote_average * 10)} %
                </span>
              </h3>
              <h3 className={css.overview}>Overview:</h3>
              <span className={css.overviewItems}>{detalis.overview}</span>
              <div className={css.genresBox}>
                <h3 className={css.genresTitle}>genres:</h3>
                <ul className={css.genreslist}>
                  {detalis.genres.map(genre => (
                    <li className={css.genresItem} key={genre.id}>
                      <p className={css.genrestext}>{genre.name}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className={css.additionalInfo}>Additional information</h2>
                <ul className={css.additionalList}>
                  <li className={css.additionalItem}>
                    <Link
                      className={css.additionalLink}
                      onClick={Click}
                      to="cast"
                    >
                      Cast
                    </Link>
                  </li>
                  <li className={css.additionalItem}>
                    <Link
                      className={css.additionalLink}
                      onClick={Click}
                      to="reviews"
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Outlet context={movieId} />
        </>
      )}
    </div>
  );
};
export default MovieDetails;
