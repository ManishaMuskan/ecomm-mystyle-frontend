import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const NavbarLinks = () => (
  <div className={classes['navbar-links']}>
    <ul className={classes['navbar-nav']}>
      <li className={classes['nav-item']}>
        <NavLink to="/shop/men" className={classes['nav-link']}>
          Men
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to="/shop/women" className={classes['nav-link']}>
          Women
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to="/shop/kids" className={classes['nav-link']}>
          Kids
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to="home-decor" className={classes['nav-link']}>
          Home & Living
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to="beauty-and-personal-care" className={classes['nav-link']}>
          Beauty
        </NavLink>
      </li>
      <li className={classes['nav-item']}>
        <NavLink to="discover" className={classes['nav-link']}>
          Discover
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavbarLinks;
