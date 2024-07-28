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
          <button type="button" className={classes['order-button']}>
            ORDERS
          </button>
        </div>
      </div>
      <h4>Customer Support</h4>
      <p>support@mystyle.co.in</p>
      <p>
        <span>Phone: </span>
        <span>8956856576</span>
      </p>
    </div>
  );
};

export default ContactUs;
