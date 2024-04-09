import classes from './Navbar.module.css';

const NavbarLinks = ({ link }) => {
  return (
    <div className={classes['navbar-links']}>
      <ul className={classes['navbar-nav']}>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Men
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Women
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Kids
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Home & Living
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a href={link} className={classes['nav-link']}>
            Discover
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
