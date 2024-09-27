import { createRef, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import mobileVerificationImg from '../assets/imgs/mobile-verification.jpg';
import Input from '../components/CustomForm/Input';
import ImageBox from '../components/UI/ImageBox/ImageBox';
import {
  CLIENT_CUSTOM_ERROR_TYPE,
  NUMBER_OF_OTP_DIGITS,
} from '../config/appConstants';
import useAuthContext from '../hooks/useAuthContext';
import classes from './OtpLogin.module.css';
import useToastContext from '../hooks/useToastContext';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import ResendOtp from '../components/ResendOtp/ResendOtp';

const OtpLogin = ({ numberOfOtpDigits = NUMBER_OF_OTP_DIGITS }) => {
  const [loading, setLoading] = useState();
  const [otp, setOtp] = useState(Array(numberOfOtpDigits).fill(''));
  const [triggerTimer, setTriggerTimer] = useState();
  const { loggedIn, verifyMobileOtp } = useAuthContext();
  const { addToast } = useToastContext();

  const navigate = useNavigate();
  const location = useLocation();

  // Extracting the 'redirect' query parameter from the URL
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect') || '/';

  const { mobile } =
    location.state || localStorage.getItem('mobileNumber') || '';

  // creating Array of input references
  const inputRefs = useMemo(
    () =>
      Array(numberOfOtpDigits)
        .fill(0)
        .map(() => createRef()),
    [numberOfOtpDigits]
  );

  const initializeOtp = () => {
    return Array(numberOfOtpDigits).fill('');
  };

  const handleMobileOtpVerificationRequest = async (otpStr) => {
    setLoading(true);
    try {
      await verifyMobileOtp(otpStr);
      navigate(redirect);
    } catch (error) {
      addToast(error.message);

      // if OTP expired
      setOtp(initializeOtp);
      inputRefs[0].current.focus();

      if (
        error.data?.errorType === CLIENT_CUSTOM_ERROR_TYPE.TOKEN_INVALID ||
        error.data?.errorType === CLIENT_CUSTOM_ERROR_TYPE.TOKEN_MISSING
      ) {
        navigate('/login', { replace: true });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (e, index) => {
    const { value: currentDigit } = e.target;
    const lastIndex = numberOfOtpDigits - 1;

    // Only accept digit inputs
    if (/^\d*$/.test(currentDigit)) {
      const copyOtp = [...otp];
      copyOtp[index] = currentDigit;
      setOtp(copyOtp);

      // Move to the next input
      if (currentDigit && index < lastIndex) {
        inputRefs[index + 1].current.focus();
      }

      // if cursor in last input and other inputs are not filled, move to first input
      if (currentDigit && index === lastIndex && copyOtp.includes('')) {
        inputRefs[0].current.focus();
      }

      // If all inputs are filled, trigger verification
      if (
        copyOtp.includes('') ||
        copyOtp.join('').length !== numberOfOtpDigits
      ) {
        return;
      }

      await handleMobileOtpVerificationRequest(copyOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];

      // If the current input is empty, move to the previous input
      if (!newOtp[index] && index > 0) {
        inputRefs[index - 1].current.focus();
      }

      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }

    inputRefs[0].current.focus();
    setTriggerTimer(true);

    return () => {
      setTriggerTimer(false);
    };
  }, [inputRefs, loggedIn, navigate]);

  return (
    <div className={classes['verification-outer-container']}>
      {loading && <LoadingSpinner className={classes['spinner-container']} />}
      <div className={classes['verification-box']}>
        <div className={classes['otp-top-image']}>
          <ImageBox
            imageSrc={mobileVerificationImg}
            imageAltTitle="mobile verification"
          />
        </div>
        <div className={classes['mobile-otp-container']}>
          <h3>Verify with OTP</h3>
          {mobile && <h4>Sent to {mobile}</h4>}
          <div className={classes['otp-box']}>
            {Array.from({ length: numberOfOtpDigits }).map((_, index) => (
              <Input
                key={`otp-${index + 1}`}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <ResendOtp triggerTimer={triggerTimer} mobile={mobile} />
        </div>
        <div className={classes['bottom-link']}>
          Log in using
          <Link to="/login/password">
            <span> Password </span>
          </Link>
        </div>
        <div className={classes['bottom-link']}>
          Having trouble logging in? <Link to="/contact-us"> Get help </Link>
        </div>
      </div>
    </div>

    // TODO: remove footer from login and otp-login page
  );
};

export default OtpLogin;
