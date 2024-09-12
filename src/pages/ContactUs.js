import { Link } from 'react-router-dom';
import classes from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={classes['contact-us-container']}>
      <div className={classes['contact-us-top']}>
        <div className={classes['contact-us-left']}>
          <h4>HELP CENTER</h4>
          <p>We are here to help you</p>
        </div>
        <div className={classes['contact-us-right']}>
          <div className={classes['order-options-wrapper']}>
            <span className={classes['my-font-bag-icon']} />
            <div className={classes['order-options']}>
              <h5>TRACK, CANCEL, RETURN/EXCHANGE</h5>
              <p>Manage your purchases</p>
            </div>
          </div>
          <Link to="/orders" className={classes['order-button']}>
            ORDERS
          </Link>
        </div>
      </div>
      <h4>Customer Support</h4>
      <p>support@mystylo.in</p>
      <p>
        <span>Phone: </span>
        <span>8585856576</span>
      </p>
    </div>
  );
};

export default ContactUs;
