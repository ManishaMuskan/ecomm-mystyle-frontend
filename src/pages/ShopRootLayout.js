import { Outlet } from 'react-router-dom';

const ShopRootLayout = () => {
  return (
    <div>
      <h1>Common offers</h1>
      <Outlet />
    </div>
  );
};

export default ShopRootLayout;
