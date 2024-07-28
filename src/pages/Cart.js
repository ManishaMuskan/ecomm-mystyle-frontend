import { Link } from 'react-router-dom';
import {
  SvgLogoWithoutBrandName,
  SvgEmptyShoppingBag,
} from '../assets/svgs/SvgIcons';
import secureIcon from '../assets/icons/sprite-secure.png';
import classes from './Cart.module.css';
import ImageBox from '../components/UI/ImageBox/ImageBox';

const CartPage = () => {
  return (
    <div className={classes['cart-container']}>
      <div className={classes['cart-header']}>
        <Link to="/">
          <SvgLogoWithoutBrandName className={classes.logo} />
        </Link>
        <ul className={classes['purchasing-steps']}>
          <li className={classes.active}>Bag</li>
          <div className={classes['step-separator']} />
          <li>Address</li>
          <div className={classes['step-separator']} />
          <li>Payment</li>
        </ul>
        <div className={classes['guarantee-box']}>
          <ImageBox
            imageSrc={secureIcon}
            imageAltTitle="100% secure"
            className={classes['guarantee-logo']}
          />
          100% Secure
        </div>
      </div>
      <div className={classes['cart-content']}>
        <SvgEmptyShoppingBag
          className={classes['svg-empty-shopping-bag-img']}
        />
        <h2>Hey, it feels so light!</h2>
        <p>There is nothing in your bag. Let&apos;s add some items.</p>
        <button
          type="button"
          className={classes['add-items-from-wishlist-btn']}>
          Add items from wishlist
        </button>
      </div>
    </div>
  );
};

export default CartPage;
