import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={classes['search-bar']}>
      <input
        type="text"
        placeholder="search for products, brands and more"
        className={classes['search-bar-input']}
      />
      <span className={classes['search-bar-icon']}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default SearchBar;
