import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpriteIcon from '../components/UI/SpriteIcon/SpriteIcon';
import classes from './Wishlist.module.css';

const Wishlist = () => {
  const [isLoggedIn] = useState();

  // const handleLogIn = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <div className={classes['wishlist-container']}>
      {!isLoggedIn && (
        <div className={classes['is-not-logged-in-box']}>
          <h4>Please Log in</h4>
          <p>Login to view items in your wishlist</p>
          <SpriteIcon className={classes['wishlist-icon']} />
          <div>
            <Link
              // to="/login?referer=https://www.mystyle.co.in/wishlist"
              to="/login"
              className="wishlistLogin-button">
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
