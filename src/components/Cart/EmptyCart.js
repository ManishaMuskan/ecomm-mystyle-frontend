import { Link } from 'react-router-dom';
import { SvgEmptyShoppingBag } from '../../assets/svgs/SvgIcons';
import classes from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={classes['cart-content']}>
      <SvgEmptyShoppingBag className={classes['svg-empty-shopping-bag-img']} />
      <h2>Hey, it feels so light!</h2>
      <p>There is nothing in your bag. Let&apos;s add some items.</p>
      <Link to="/wishlist" className={classes['add-items-from-wishlist-btn']}>
        Add items from wishlist
      </Link>
    </div>
  );
};

export default EmptyCart;
