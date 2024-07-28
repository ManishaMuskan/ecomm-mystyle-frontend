import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {
  const [mobileNumberInput, setMobileNumberInput] = useState('');
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumberInput(e.target.value);
    const regex = /(0|91)?[6-9][0-9]{9}/;

    // Return true if the mobile_number
    // matched the ReGex
    if (regex.test(e.target.value) === true) {
      setIsMobileNumberValid(true);
    } else {
      setIsMobileNumberValid(false);
    }
  };

  const handleSubmit = () => {
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
              +91 <span className={classes['mobile-number-separator']}>|</span>
              <span
                className={`${classes['mobile-number-placeholder']} ${mobileNumberInput ? classes.hide : ''}`}>
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
        {/* <div className="midLinks">
          By continuing, I agree to the <a href="/termsofuse">Terms of Use</a>{' '}
          &amp; <a href="/privacypolicy">Privacy Policy</a>
        </div> */}
        <button type="button" className={classes.submit} onClick={handleSubmit}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Login;
