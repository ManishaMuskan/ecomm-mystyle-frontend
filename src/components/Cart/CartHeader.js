import { Link } from 'react-router-dom';
import classes from './CartHeader.module.css';
import { SvgLogoWithoutBrandName } from '../../assets/svgs/SvgIcons';
import ImageBox from '../UI/ImageBox/ImageBox';
import secureIcon from '../../assets/icons/sprite-secure.png';

const CartHeader = () => {
  return (
    <div className={classes['cart-header']}>
      <Link to="/">
        <SvgLogoWithoutBrandName className={classes.logo} />
      </Link>
      <ul className={classes['purchasing-steps']}>
        <li className={classes.active}>Bag</li>
        <div className={classes['step-separator']} />
        <li>Address</li>
        <div className={classes['step-separator']} />
        <li>Payment</li>
      </ul>
      <div className={classes['guarantee-box']}>
        <ImageBox
          imageSrc={secureIcon}
          imageAltTitle="100% secure"
          className={classes['guarantee-logo']}
        />
        100% Secure
      </div>
    </div>
  );
};

export default CartHeader;
