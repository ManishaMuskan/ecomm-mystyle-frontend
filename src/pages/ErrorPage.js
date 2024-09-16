import { useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Navbar />
      <div id="error-page">
        <h1>Oops! There’s nothing to see here</h1>
        <p>Sorry, we can’t seem to find the page you’re looking for.</p>
        Oops! There’s nothing to see here
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
