import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const NavbarLinks = ({ link }) => {
  return (
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
          <a href={link} className={classes['nav-link']}>
            Home & Living
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Beauty
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Discover
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
