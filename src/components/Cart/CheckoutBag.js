import CartAddressChange from './CartAddressChange';
import CartItemList from './CartItemList';
import PriceDetails from './PriceDetails';
import classes from './CheckoutBag.module.css';

const CheckoutBag = () => {
  return (
    <div className={classes['cart-items-in-bag-box']}>
      <div className={classes['cart-left']}>
        <CartAddressChange />
        <CartItemList />
      </div>
      <div className={classes['cart-right']}>
        <PriceDetails />
      </div>
    </div>
  );
};

export default CheckoutBag;
