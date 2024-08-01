// import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpriteIcon from '../components/UI/SpriteIcon/SpriteIcon';
import classes from './Wishlist.module.css';
import useAuthContext from '../hooks/useAuthContext';

const Wishlist = () => {
  const { loggedIn } = useAuthContext();

  return (
    <div className={classes['wishlist-container']}>
      {!loggedIn && (
        <div className={classes['is-not-logged-in-box']}>
          <h4>Please Log in</h4>
          <p>Login to view items in your wishlist</p>
          <SpriteIcon className={classes['wishlist-icon']} />
          <div>
            <Link
              // TOLOOKINTO: to="/login?referer=https://www.mystyle.co.in/wishlist"
              to="/login"
              className="wishlistLogin-button">
              LOGIN
            </Link>
          </div>
        </div>
      )}
      {loggedIn && <p>Wishlisted Products list</p>}
    </div>
  );
};

export default Wishlist;
