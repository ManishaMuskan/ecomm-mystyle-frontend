import classes from './Navbar.module.css';
import logo from '../../assets/imgs/logo-without-brand-name.png';

const NavbarBrand = ({ link }) => {
  return (
    <div className={classes['navbar-brand']}>
      <a href={link} className={classes['navbar-logo']}>
        <img src={logo} alt="MyStyle" />
      </a>
    </div>
  );
};

export default NavbarBrand;
