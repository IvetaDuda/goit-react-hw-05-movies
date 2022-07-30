import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.Loader}>
      <RotatingLines strokeColor="#f27b77" height={200} width={200} />
    </div>
  );
};
export default Loader;
