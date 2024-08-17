import { Outlet } from 'react-router-dom';
import CartHeader from '../components/Cart/CartHeader';
import EmptyCart from '../components/Cart/EmptyCart';
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
        <div className={classes['cart-content-container']}>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default CartPage;
