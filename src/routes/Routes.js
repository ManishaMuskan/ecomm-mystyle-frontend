import { createBrowserRouter } from 'react-router-dom';
import '../App.module.css';
import CheckoutAddress from '../components/Cart/CheckoutAddress';
import CheckoutBag from '../components/Cart/CheckoutBag';
import CheckoutPayment from '../components/Cart/CheckoutPayment/CheckoutPayment';
import BeautyAndPersonalCare from '../pages/BeautyAndPersonalCare';
import Cart from '../pages/Cart';
import ContactUs from '../pages/ContactUs';
import Discover from '../pages/Discover';
import ErrorPage from '../pages/ErrorPage';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import HomeDecor from '../pages/HomeDecor';
import KidsShop from '../pages/KidsShop';
import Login from '../pages/Login';
import LoginWithPassword from '../pages/LoginWithPassword';
import MenShop from '../pages/MenShop';
import OtpLogin from '../pages/OtpLogin';
import ProductDetails from '../pages/Products/ProductDetails';
import Products from '../pages/Products/Products';
import RootLayout from '../pages/RootLayout';
import ShopRootLayout from '../pages/ShopRootLayout';
import Wishlist from '../pages/Wishlist';
import WomenShop from '../pages/WomenShop';
import WorkInProgress from '../pages/WorkInProgress';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, index: true },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'otp-login',
        element: <OtpLogin />,
      },
      {
        path: 'login/password',
        element: <LoginWithPassword />,
      },
      {
        path: 'forgot',
        element: <ForgotPassword />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'my',
            children: [
              {
                path: 'wishlist',
                element: <Wishlist />,
              },
              {
                path: 'orders',
                element: <WorkInProgress />,
              },
              {
                path: 'saved-upi',
                element: <WorkInProgress />,
              },
              {
                path: 'saved-cards',
                element: <WorkInProgress />,
              },
              {
                path: 'saved-addresses',
                element: <WorkInProgress />,
              },
              {
                path: 'profile',
                element: <WorkInProgress />,
              },
              {
                path: 'edit-profile',
                element: <WorkInProgress />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute canHaveFallBack />,
        children: [
          {
            path: 'wishlist',
            element: <Wishlist />,
          },
          {
            path: 'checkout',
            element: (
              <ProtectedRoute redirectTo="/login">
                <Cart />
              </ProtectedRoute>
            ), // Force login
            children: [
              { path: 'bag', element: <CheckoutBag />, index: true },
              { path: 'address', element: <CheckoutAddress /> },
              { path: 'payment', element: <CheckoutPayment /> },
            ],
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
        path: 'contact-us',
        element: <ContactUs />,
      },
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
]);

export default router;
