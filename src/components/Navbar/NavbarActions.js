import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const NavbarActions = ({ link }) => {
  return (
    <div className={classes['navbar-actions-container']}>
      <a href={link} className={classes['navbar-action']}>
        <FontAwesomeIcon icon={faUser} />
        <span className={classes['navbar-action-label']}>Profile</span>
      </a>

      <NavLink to="wishlist" className={classes['navbar-action']}>
        <FontAwesomeIcon icon={faHeart} />
        <span className={classes['navbar-action-label']}>Wishlist</span>
      </NavLink>

      <NavLink
        to="cart"
        className={`${classes['navbar-action']} ${classes.cart}`}>
        {/* Included just to get an idea about how image sprites work */}
        <span
          className={`${classes['mystyle-icons-sprite']} ${classes['sprites-headerBag']}`}
        />
        <span className={classes['navbar-action-label']}>Bag</span>
        <span className={classes['cart-items-badge']}>3</span>
      </NavLink>
    </div>
  );
};

export default NavbarActions;
