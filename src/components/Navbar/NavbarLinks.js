import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const NavbarLinks = () => (
  <ul className={classes['navbar-links-container']}>
    <li className={classes['nav-link']}>
      <NavLink to="/shop/men">Men</NavLink>
    </li>
    <li className={classes['nav-link']}>
      <NavLink to="/shop/women">Women</NavLink>
    </li>
    <li className={classes['nav-link']}>
      <NavLink to="/shop/kids">Kids</NavLink>
    </li>
    <li className={classes['nav-link']}>
      <NavLink to="home-decor">Home & Living</NavLink>
    </li>
    <li className={classes['nav-link']}>
      <NavLink to="beauty-and-personal-care">Beauty</NavLink>
    </li>
    <li className={classes['nav-link']}>
      <NavLink to="discover" className={classes['nav-link']}>
        Discover
      </NavLink>
    </li>
  </ul>
);

export default NavbarLinks;
