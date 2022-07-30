import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      MovieDetails
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
// {movieId}
