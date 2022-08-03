import css from './SearchFilms.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const SearchFilms = ({ hendelSubmit, hendelNameChange, name }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={hendelSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          placeholder="enter the name of the movie"
          autoFocus
          value={name}
          onChange={hendelNameChange}
        />

        <button className={css.SearchFormButton} type="submit">
          <SearchIcon className={css.SearchFormIcon} />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};
export default SearchFilms;
