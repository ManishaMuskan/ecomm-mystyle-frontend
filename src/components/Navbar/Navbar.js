import classes from './Navbar.module.css';
import NavbarActions from './NavbarActions';
import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes['navbar-brand']}>
          <NavbarBrand />
        </div>
        <div className={classes['navbar-links']}>
          <NavbarLinks />
        </div>
        <div className={classes['navbar-search']}>
          <SearchBar />
        </div>
        <div className={classes['navbar-actions']}>
          <NavbarActions />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
