import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.css';
import CheckoutAddress from './components/Cart/CheckoutAddress';
import CheckoutBag from './components/Cart/CheckoutBag';
import CheckoutPayment from './components/Cart/CheckoutPayment/CheckoutPayment';
import Toast from './components/UI/Toast/Toast';
import ToastStack from './components/UI/Toast/ToastStack';
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
import { ToastContextProvider } from './store/ui/ToastProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, index: true },
      {
        path: 'my',
        children: [
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
            path: 'edit-profile',
            element: <WorkInProgress />,
          },
        ],
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
        path: 'orders',
        element: <WorkInProgress />,
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
  const [globalErrorMessage, setGlobalErrorMessage] = useState();
  // Handle global errors and unhandled promise rejections
  useEffect(() => {
    window.onerror = function globalError(
      message,
      source,
      lineno,
      colno,
      error
    ) {
      setGlobalErrorMessage(message || 'An unexpected error occurred');
      console.error('Global Error Caught:', {
        message,
        source,
        lineno,
        colno,
        error,
      });
    };

    window.onunhandledrejection = function globalUnhandledRejection(event) {
      setGlobalErrorMessage(event.reason?.message || 'Something went wrong!');
      console.error('Unhandled Promise Rejection:', event.reason);
    };

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <ToastStack />
        {globalErrorMessage && (
          // toasts from toastProvider is not accessible as it can only be accessed in component inside ToastContextProvider
          <Toast
            message={globalErrorMessage}
            onClose={setGlobalErrorMessage('')}
          />
        )}
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;
