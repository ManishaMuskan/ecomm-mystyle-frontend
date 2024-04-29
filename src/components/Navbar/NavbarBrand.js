import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/logo-without-brand-name.png';
import classes from './Navbar.module.css';

const NavbarBrand = () => {
  return (
    <NavLink to="/" className={classes['navbar-logo']}>
      <img src={logo} alt="MyStyle" />
    </NavLink>
  );
};

export default NavbarBrand;
