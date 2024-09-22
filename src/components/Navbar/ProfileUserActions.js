import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import classes from './Navbar.module.css';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
// import useToastContext from '../../hooks/useToastContext';

const ProfileUserActions = () => {
  const { authUser, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (error) {
      // error occurred
    } finally {
      localStorage.clear();
      navigate('/login');
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className={classes['profile-user-actions']}>
        {!authUser && (
          <div>
            <p
              className={`${classes['profile-user-info']} ${classes['profile-user-info-title']}`}>
              Welcome
            </p>
            <p className={classes['profile-user-info']}>
              To access account and manage orders
            </p>
            <div>
              <NavLink to="/login">
                <button type="button" className={classes['login-signup-btn']}>
                  login / Signup
                </button>
              </NavLink>
            </div>
          </div>
        )}
        {authUser && (
          <NavLink to="/my/profile" data-track="edit_profile">
            <div className={classes['profile-user-info']}>
              <p className={classes['user-name']}>
                Hello
                <span>{authUser.name}</span>
              </p>
              <p className={classes['user-email-or-mobile']}>
                {authUser.mobile || authUser.email}
              </p>
            </div>
          </NavLink>
        )}
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
        {authUser && (
          <div className={classes['user-profile-links-box']}>
            <NavLink to="/my/edit-profile">Edit Profile</NavLink>
            <button
              type="button"
              onClick={handleLogout}
              className={classes['logout-btn']}>
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileUserActions;
