import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.css';
import CheckoutAddress from './components/Cart/CheckoutAddress';
import CheckoutBag from './components/Cart/CheckoutBag';
import CheckoutPayment from './components/Cart/CheckoutPayment';
import BeautyAndPersonalCare from './pages/BeautyAndPersonalCare';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Discover from './pages/Discover';
import ErrorPage from './pages/ErrorPage';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import HomeDecor from './pages/HomeDecor';
import KidsShop from './pages/KidsShop';
import Login from './pages/Login';
import LoginWithPassword from './pages/LoginWithPassword';
import MenShop from './pages/MenShop';
import OtpLogin from './pages/OtpLogin';
import ProductDetails from './pages/Products/ProductDetails';
import Products from './pages/Products/Products';
import RootLayout from './pages/RootLayout';
import ShopRootLayout from './pages/ShopRootLayout';
import Wishlist from './pages/Wishlist';
import WomenShop from './pages/WomenShop';
import WorkInProgress from './pages/WorkInProgress';
import AuthContextProvider from './store/auth/AuthContextProvider';

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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'login/password',
        element: <LoginWithPassword />,
      },
      {
        path: 'otp-login',
        element: <OtpLogin />,
      },
      {
        path: '/forgot',
        element: <ForgotPassword />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      // {
      //   path: 'cart',
      //   element: <Cart />,
      // },
      {
        path: 'product-details',
        element: <ProductDetails />,
      },
      {
        path: 'faqs',
        element: <WorkInProgress />,
      },
      {
        path: 'terms-and-conditions',
        element: <WorkInProgress />,
      },
      {
        path: 'privacy-policy',
        element: <WorkInProgress />,
      },
    ],
  },
  {
    path: '/checkout',
    element: <Cart />,
    children: [
      { path: 'bag', element: <CheckoutBag />, index: true },
      { path: 'address', element: <CheckoutAddress /> },
      { path: 'payment', element: <CheckoutPayment /> },
    ],
  },
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
