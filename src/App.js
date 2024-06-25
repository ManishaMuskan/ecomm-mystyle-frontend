import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.css';
import BeautyAndPersonalCare from './pages/BeautyAndPersonalCare';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import HomeDecor from './pages/HomeDecor';
import KidsShop from './pages/KidsShop';
import MenShop from './pages/MenShop';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ShopRootLayout from './pages/ShopRootLayout';
import Wishlist from './pages/Wishlist';
import WomenShop from './pages/WomenShop';
import Discover from './pages/Discover';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, index: true },
      {
        path: 'shop',
        element: <ShopRootLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: 'men',
            element: <MenShop />,
          },
          {
            path: 'women',
            element: <WomenShop />,
          },
          {
            path: 'kids',
            element: <KidsShop />,
          },
        ],
      },
      {
        path: 'beauty-and-personal-care',
        element: <BeautyAndPersonalCare />,
      },
      {
        path: 'home-decor',
        element: <HomeDecor />,
      },
      {
        path: 'discover',
        element: <Discover />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
