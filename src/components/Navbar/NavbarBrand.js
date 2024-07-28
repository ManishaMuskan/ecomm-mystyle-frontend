import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { SvgLogoWithoutBrandName } from '../../assets/svgs/SvgIcons';

const NavbarBrand = () => {
  return (
    <Link to="/">
      <SvgLogoWithoutBrandName className={classes['navbar-logo']} />
    </Link>
  );
};

export default NavbarBrand;
