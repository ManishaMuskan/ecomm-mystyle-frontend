// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { SvgSuccessEnvelope } from '../assets/svgs/SvgIcons';
import classes from './ForgotPassword.module.css';

const ForgotPassword = () => {
  // const [mobileOrEmail, setMobileOrEmail] = useState('');

  // const handleMobileEmailChange = (e) => {
  //   setMobileOrEmail(e.target.value);
  // };

  return (
    <div className={classes['forgot-password-container']}>
      {/* <div className={classes['forgot-password-box']}>
        <div className={classes['recovery-heading']}>
          <h2>Reset Password</h2>
          <p>
            Enter your email or mobile number and we’ll send a link on your
            email to reset your password.
          </p>
        </div>
        <form autoComplete="new-password">
          <div className={classes['form-container']}>
            <div className={classes['form-group']}>
              <input
                name="mobileOrEmail"
                type="text"
                className={classes['form-control']}
                value={mobileOrEmail}
                onChange={handleMobileEmailChange}
              />
              <span
                className={
                  !mobileOrEmail
                    ? classes['placeholder-alternative']
                    : classes['top-placeholder-alternative']
                }>
                Email or Mobile Number
                <span>*</span>
              </span>
            </div>
            <div className="form-group">
              <button
                type="button"
                className={`${classes.btn} ${classes.primary} ${classes.lg} ${classes.block} ${classes['submit-button']}`}>
                SEND LINK
              </button>
            </div>
          </div>
        </form>
        <div className={classes['auth-page-links']}>
          Unable to reset password?
          <Link to="/contact-us" className={classes['auth-page-link']}>
            Get help
          </Link>
        </div>
      </div> */}
      <div className={classes['forgot-password-success']}>
        <SvgSuccessEnvelope />
        <div>
          <h4>
            We have sent a password reset link to your registered email ID
          </h4>
          <p>
            Click on the ‘Reset Password’ link sent to your email ID and create
            a new password
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
