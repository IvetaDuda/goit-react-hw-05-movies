import GiffError from '../../icons/gif.gif';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ query }) => {
  return (
    <div className={css.containerError}>
      <h2 className={css.title}>No films found with name {query}</h2>
      <img src={GiffError} alt="Error" width="300" />
    </div>
  );
};
export default ErrorMessage;
