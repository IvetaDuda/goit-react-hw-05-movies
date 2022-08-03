import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

import api from 'server/api';

import css from './Reviews.module.css';

const Reviews = () => {
  const movie_id = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.fetchReviews(movie_id).then(data => setReviews(data.results));
  }, [movie_id]);

  return (
    <ul className={css.container}>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content, author_details }) => (
          <li key={id} className={css.info}>
            <h1 className={css.infoTitle}>
              Author:
              <span className={css.infoTitleItem}> {author}</span>
            </h1>

            <p className={css.infoText}>{content}</p>
            {author_details.rating && (
              <p className={css.infoAuthorRatingItem}>
                Rating:
                <span className={css.infoAuthorRating}>
                  {author_details.rating}
                </span>
              </p>
            )}
          </li>
        ))
      ) : (
        <p className={css.errorMessage}>
          We don't have any reviews for this movie
        </p>
      )}
    </ul>
  );
};
export default Reviews;
