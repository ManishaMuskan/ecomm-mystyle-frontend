import { createRef, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mobileVerificationImg from '../assets/imgs/mobile-verification.jpg';
import Input from '../components/CustomForm/Input';
import ImageBox from '../components/UI/ImageBox/ImageBox';
import { NUMBER_OF_OTP_DIGITS } from '../config/appConstants';
import useAuthContext from '../hooks/useAuthContext';
import classes from './OtpLogin.module.css';
import useToastContext from '../hooks/useToastContext';

const OtpLogin = ({ numberOfOtpDigits = NUMBER_OF_OTP_DIGITS }) => {
  const { verifyMobileOtp } = useAuthContext();
  const navigate = useNavigate();

  // creating Array of input references
  const inputRefs = useMemo(
    () =>
      Array(numberOfOtpDigits)
        .fill(0)
        .map(() => createRef()),
    [numberOfOtpDigits]
  );

  const [otp, setOtp] = useState(Array(numberOfOtpDigits).fill(''));
  const { addToast } = useToastContext();

  const handleChange = async (e, index) => {
    try {
      const { value: currentDigit } = e.target;
      const lastIndex = numberOfOtpDigits - 1;

      // Only accept digit inputs
      if (/^\d*$/.test(currentDigit)) {
        const newOtp = [...otp];
        newOtp[index] = currentDigit;
        setOtp(newOtp);

        // Move to the next input
        if (currentDigit && index < lastIndex) {
          inputRefs[index + 1].current.focus();
        }

        // if cursor in last input and other inputs are not filled, move to first input
        if (currentDigit && index === lastIndex && newOtp.includes('')) {
          inputRefs[0].current.focus();
        }

        // If all inputs are filled, trigger verification
        if (
          newOtp.join('').length === numberOfOtpDigits &&
          !newOtp.includes('')
        ) {
          await verifyMobileOtp(newOtp.join(''));
          // if (data) {
          //   navigate('/');
          // }
        }
      }
    } catch (error) {
      addToast(error.message);
      navigate('/otp-login');
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
    inputRefs[0].current.focus();
  }, [inputRefs]);

  return (
    // <ErrorBoundary>
    <div className={classes['verification-outer-container']}>
      <div className={classes['verification-box']}>
        <div className={classes['otp-top-image']}>
          <ImageBox
            imageSrc={mobileVerificationImg}
            imageAltTitle="mobile verification"
          />
        </div>
        <div className={classes['mobile-otp-container']}>
          <h3>Verify with OTP</h3>
          <h4>Sent to 7992480960</h4>
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

          <button type="button" className={classes['resend-btn']}>
            RESEND OTP
          </button>

          <div className={classes['resend-time']}>
            <span> Resend OTP in: </span> 00:10{' '}
          </div>
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
    // </ErrorBoundary>

    // TODO: remove footer from login and otp-login page
  );
};

export default OtpLogin;
