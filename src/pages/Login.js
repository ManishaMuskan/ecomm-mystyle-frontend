import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import useAuthContext from '../hooks/useAuthContext';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);

  const { mobileSignupSignin } = useAuthContext();
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    const regex = /(0|91)?[6-9][0-9]{9}/;
    if (regex.test(e.target.value) === true) {
      setIsMobileNumberValid(true);
    } else {
      setIsMobileNumberValid(false);
    }
  };

  const handleSubmit = async () => {
    await mobileSignupSignin(mobileNumber);
    navigate('/otp-login');
  };

  return (
    // TODO: if already logged in, send it to home page
    <div className={classes['login-signup-container']}>
      <div className={classes['login-with-mobile-number-box']}>
        <h4>
          Login <small>or</small> Signup
        </h4>
        <div className={classes['login-input-group']}>
          <div className={classes['form-group']}>
            <input
              minLength="10"
              maxLength="10"
              onChange={handleMobileNumberChange}
            />
            <span className={classes['placeholder-alternative']}>
              <span className={classes['country-code']}>+91</span>
              <span className={classes['mobile-number-separator']}>|</span>
              <span
                className={`${classes['mobile-number-placeholder']} ${mobileNumber ? classes.hide : ''}`}>
                Mobile number<span>*</span>
              </span>
            </span>
          </div>
          {!isMobileNumberValid && (
            <div className={classes['error-container']}>
              Please enter a valid mobile number (10 digits)
            </div>
          )}
        </div>
        <div className={classes['mid-links']}>
          By continuing, I agree to the
          <Link to="/terms-and-conditions"> Terms of Use</Link> &amp;
          <Link to="/privacy-policy"> Privacy Policy</Link>
        </div>
        <button type="button" className={classes.submit} onClick={handleSubmit}>
          CONTINUE
        </button>
        <div className={classes['get-help']}>
          Have trouble logging in? <Link to="/contact-us">Get help</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
