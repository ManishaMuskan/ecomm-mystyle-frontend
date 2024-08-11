import CartAddressChange from '../components/Cart/CartAddressChange';
import CartHeader from '../components/Cart/CartHeader';
import CartItemList from '../components/Cart/CartItemList';
import EmptyCart from '../components/Cart/EmptyCart';
import PriceDetails from '../components/Cart/PriceDetails';
import useAuthContext from '../hooks/useAuthContext';
import classes from './Cart.module.css';

const CartPage = () => {
  const { loggedIn } = useAuthContext();

  return (
    <>
      <div className={classes['cart-header-container']}>
        <CartHeader />
      </div>

      {!loggedIn && <EmptyCart />}

      {loggedIn && (
        <div className={classes['cart-items-in-bag-container']}>
          <div className={classes['cart-items-in-bag-box']}>
            <div className={classes['cart-left']}>
              <CartAddressChange />
              <CartItemList />
            </div>
            <div className={classes['cart-right']}>
              <PriceDetails />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
