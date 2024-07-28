import { Outlet } from 'react-router-dom';

const ShopRootLayout = () => {
  return (
    <div>
      {/* <div>Festive offers</div> */}
      <Outlet />
    </div>
  );
};

export default ShopRootLayout;
