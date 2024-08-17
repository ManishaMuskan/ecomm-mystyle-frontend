import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import secureIcon from '../../assets/icons/sprite-secure.png';
import { SvgLogoWithoutBrandName } from '../../assets/svgs/SvgIcons';
import ImageBox from '../UI/ImageBox/ImageBox';
import classes from './CartHeader.module.css';
import useAuthContext from '../../hooks/useAuthContext';

const CartTabs = [
  {
    path: '/checkout/bag',
    label: 'Bag',
  },
  { path: '/checkout/address', label: 'Address' },
  {
    path: '/checkout/payment',
    label: 'Payment',
  },
];

const StepSeparator = () => <div className={classes['step-separator']} />;

const CartHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedIn } = useAuthContext();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className={classes['cart-header']}>
      <Link to="/">
        <SvgLogoWithoutBrandName className={classes.logo} />
      </Link>
      <ul className={classes['checkout-steps']}>
        {CartTabs.map((tab, index) => (
          <React.Fragment key={tab.path}>
            <li
              className={`${location.pathname === tab.path ? classes.active : ''} ${loggedIn ? classes['cursor-pointer'] : ''}`}
              onClick={() => loggedIn && handleTabClick(tab.path)}
              role="tab"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && loggedIn) handleTabClick(tab.path);
              }}>
              {tab.label}
            </li>
            {index < CartTabs.length - 1 && <StepSeparator />}
          </React.Fragment>
        ))}
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
