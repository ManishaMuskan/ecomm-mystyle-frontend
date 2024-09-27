import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import classes from './Navbar.module.css';
// import useToastContext from '../../hooks/useToastContext';

const ProfileUserActions = () => {
  const { authUser, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const redirectUrl = window.location.pathname;

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (error) {
      // error occurred
    } finally {
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
              <Link to={`/login?redirect=${redirectUrl}`}>
                <button type="button" className={classes['login-signup-btn']}>
                  login / Signup
                </button>
              </Link>
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
