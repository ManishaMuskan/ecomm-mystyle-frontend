import Navbar from './Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ height: '100vh' }}>
        <p>Different layouts</p>
      </main>
    </>
  );
};

export default Layout;
