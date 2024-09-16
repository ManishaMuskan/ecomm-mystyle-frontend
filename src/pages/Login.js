import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import useAuthContext from '../hooks/useAuthContext';
import FormInputError from '../components/UI/CustomFormAndControls/FormInputError';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileValidationError, setMobileValidationError] = useState(null);
  const [touched, setTouched] = useState(false);
  const { mobileSignupSignin } = useAuthContext();
  const navigate = useNavigate();

  const validateMobileNumber = (mobile) => {
    const regex = /^(0|91)?[6-9][0-9]{9}$/;
    let errorMessage = null;

    if (!mobile || !regex.test(mobile)) {
      errorMessage = 'Please enter a valid mobile number (10 digits)';
    }

    setMobileValidationError(errorMessage);

    return !errorMessage;
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);

    // If the input has been touched, validate in real-time
    if (touched) {
      validateMobileNumber(e.target.value);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validateMobileNumber(mobileNumber); // Validate when the user leaves the input field
  };

  const handleSubmit = async () => {
    setTouched(true); // Mark as touched on submit
    const isValid = validateMobileNumber(mobileNumber);

    if (!isValid) {
      return false;
    }

    await mobileSignupSignin(mobileNumber);
    return navigate('/otp-login');
  };

  return (
    // TODO: if already logged in, send it to home page
    <div className={classes['login-signup-container']}>
      <div className={classes['login-with-mobile-number-box']}>
        <h4>
          Login <small>or</small> Signup
        </h4>
        <form>
          <div className={classes['login-input-group']}>
            <div className={classes['form-group']}>
              <input
                minLength="10"
                maxLength="10"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                onBlur={handleBlur} // Handle blur event to mark as touched
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
            {mobileValidationError && (
              <FormInputError errorMessage={mobileValidationError} />
            )}
          </div>
          <div className={classes['mid-links']}>
            By continuing, I agree to the
            <Link to="/terms-and-conditions"> Terms of Use</Link> &amp;
            <Link to="/privacy-policy"> Privacy Policy</Link>
          </div>
          <button
            type="submit"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={mobileValidationError}>
            CONTINUE
          </button>
        </form>
        <div className={classes['get-help']}>
          Have trouble logging in? <Link to="/contact-us">Get help</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
