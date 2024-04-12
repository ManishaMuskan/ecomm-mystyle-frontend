// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <ul>
          <li>pages links</li>
          <li>Social links</li>
          <li>customer care support info</li>
          <li>Since when this business is in</li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
