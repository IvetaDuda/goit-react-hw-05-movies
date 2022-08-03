import GiffError from '../../icons/gif.gif';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ query }) => {
  return (
    <div className={css.containerError}>
      <img src={GiffError} alt="Error" width="400" />
      <h2 className={css.title}>No films found with name {query}</h2>
    </div>
  );
};
export default ErrorMessage;
