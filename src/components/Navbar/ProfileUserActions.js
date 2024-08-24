import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const ProfileUserActions = () => {
  return (
    <div className={classes['profile-user-actions']}>
      <NavLink to="/my/profile" data-track="edit_profile">
        <div className={classes['profile-user-info']}>
          <p className={classes['user-name']}>
            Hello <span>Manisha</span>
          </p>
          <p className={classes['user-email-or-mobile']}>799248090</p>
        </div>
      </NavLink>
      <div className={classes['user-profile-links-box']}>
        <NavLink to="/my/wishlist">Wishlist</NavLink>
        <NavLink to="/my/orders">Orders</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
      </div>
      <div className={classes['user-profile-links-box']}>
        <NavLink to="/my/saved-upi">Saved UPIs</NavLink>
        <NavLink to="/my/saved-cards">Saved Cards</NavLink>
        <NavLink to="/my/saved-addresses">Saved Addresses</NavLink>
      </div>
      <div className={classes['user-profile-links-box']}>
        <NavLink to="/my/edit-profile">Edit Profile</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  );
};

export default ProfileUserActions;
