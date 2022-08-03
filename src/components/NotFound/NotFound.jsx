import css from './NotFound.module.css';
// import Png from '../../icons/girlPng.png';
import Png from '../../icons/pngegg.png';

const NotFound = () => {
  return (
    <div className={css.NotFound}>
      <img src={Png} alt="Error" width="550" />
      <h2 className={css.NotFoundTitle}>Page not found</h2>
    </div>
  );
};
export default NotFound;
