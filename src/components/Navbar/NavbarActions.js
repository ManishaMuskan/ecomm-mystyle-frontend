/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import classes from './Navbar.module.css';

const NavbarActions = ({ link }) => {
  return (
    <div className={classes['navbar-actions']}>
      <a href={link} className={classes['navbar-action']}>
        <FontAwesomeIcon icon={faUser} />
        <span className={classes['navbar-action-label']}>Profile</span>
      </a>

      <a href={link} className={classes['navbar-action']}>
        <FontAwesomeIcon icon={faHeart} />
        <span className={classes['navbar-action-label']}>Wishlist</span>
      </a>
      <a href={link} className={classes['navbar-action']}>
        {/* Included just to get an idea about how image sprites work */}
        <span
          className={`${classes['myntraweb-sprite']} ${classes['sprites-headerBag']}`}
        />
        <span className={classes['navbar-action-label']}>Bag</span>
      </a>
    </div>
  );
};

export default NavbarActions;
