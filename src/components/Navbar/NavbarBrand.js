import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/logo-without-brand-name.png';
import classes from './Navbar.module.css';

const NavbarBrand = () => {
  return (
    <div className={classes['navbar-brand']}>
      <NavLink to="/" className={classes['navbar-logo']}>
        <img src={logo} alt="MyStyle" />
      </NavLink>
    </div>
  );
};

export default NavbarBrand;
