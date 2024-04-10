import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Wishlist from './pages/Wishlist';
import MenShop from './pages/MenShop';
import WomenShop from './pages/WomenShop';
import KidsShop from './pages/KidsShop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, index: true },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'shop',
        children: [
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
        path: 'cart',
        element: <Cart />,
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
