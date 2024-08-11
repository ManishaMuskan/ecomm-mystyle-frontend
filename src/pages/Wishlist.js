// import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpriteIcon from '../components/UI/SpriteIcon/SpriteIcon';
import classes from './Wishlist.module.css';
import useAuthContext from '../hooks/useAuthContext';
import ImageBox from '../components/UI/ImageBox/ImageBox';

const Wishlist = () => {
  const { loggedIn } = useAuthContext();

  return (
    <div className={classes['wishlist-container']}>
      {!loggedIn && (
        <div className={classes['is-not-logged-in-box']}>
          <h4>Please Log in</h4>
          <p>Login to view items in your wishlist</p>
          <SpriteIcon className={classes['wishlist-icon']} />
          <Link
            // TOLOOKINTO: to="/login?referer=https://www.mystyle.co.in/wishlist"
            to="/login"
            className="wishlistLogin-button">
            LOGIN
          </Link>
        </div>
      )}
      {loggedIn && (
        <div className={classes['is-logged-in-box']}>
          <h4>
            My Wishlist <span>16 items</span>
          </h4>
          <div
            className={`box-center ${classes['wishlisted-products-container']}`}>
            {Array.from({ length: 12 })
              .fill(0)
              .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={String(index)} className={classes['product-wrapper']}>
                  <button type="button" className={classes.close}>
                    &#x2715;
                  </button>
                  <div className={classes['product-details-wrapper']}>
                    <ImageBox
                      className={
                        index === 4 ? classes['item-out-of-Stock-img'] : ''
                      }
                      imageSrc="/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/012cc2ac-7909-45ad-8aa5-ee42c7dec8f81710410964989-Kook-N-Keech-Men-Tshirts-7491710410964655-1.jpg"
                      imageAltTitle="product-image"
                    />
                    <div className={classes['product-details']}>
                      {index === 4 && (
                        <div className={classes['item-out-of-Stock-text']}>
                          Out of Stock
                        </div>
                      )}
                      <p className={classes['product-title']}>
                        Anouk Embellished Sequinned Pure Georgette Saree
                      </p>
                      <div className={classes['price-box']}>
                        {index !== 4 && (
                          <span className={classes['discounted-price']}>
                            Rs.1,979
                          </span>
                        )}
                        <span
                          className={
                            index === 4
                              ? classes['discounted-price']
                              : classes.mrp
                          }>
                          Rs.8,999
                        </span>
                        {index !== 4 && (
                          <span className={classes['discounted-text']}>
                            (78% OFF)
                          </span>
                        )}
                      </div>
                      <Link
                        to="/cart"
                        className={classes['move-to-bag-action']}>
                        {index !== 4 ? 'Move to Cart' : 'Show Similar'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
