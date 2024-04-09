import classes from './Navbar.module.css';
import NavbarActions from './NavbarActions';
import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <NavbarBrand />
        <NavbarLinks />
        <SearchBar />
        <NavbarActions />
      </div>
    </nav>
  );
};

export default Navbar;
