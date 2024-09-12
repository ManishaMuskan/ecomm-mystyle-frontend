import { createRef, useMemo, useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileVerificationImg from '../assets/imgs/mobile-verification.jpg';
import Input from '../components/CustomForm/Input';
import ImageBox from '../components/UI/ImageBox/ImageBox';
import useAuthContext from '../hooks/useAuthContext';
import classes from './OtpLogin.module.css';

const OtpLogin = ({ numberOfOtpDigits = 4 }) => {
  const { verifyMobileOtp } = useAuthContext();
  const initialState = {};

  // creating Array of input references
  const inputRefs = useMemo(
    () =>
      Array(numberOfOtpDigits)
        .fill(0)
        .map(() => createRef()),
    [numberOfOtpDigits]
  );

  function otpReducer(state, action) {
    // action.type can be "otp0", "otp1", "otp2", "otp3"
    switch (action.type) {
      case action.type: {
        return {
          ...state,
          [action.type]: action.otpValue,
        };
      }
      default:
        return state;
    }
  }

  // Initialize state based on numberOfOtpDigits
  for (let i = 0; i < numberOfOtpDigits; i++) {
    initialState[`otp${i}`] = '';
  }

  const [otpState, dispatch] = useReducer(otpReducer, initialState);

  const handleChange = (e, index) => {
    const { value: currentDigit } = e.target;
    const lastIndex = numberOfOtpDigits - 1;

    // do not accept if it's not digit
    if (/^\d*$/.test(currentDigit)) {
      dispatch({
        type: `otp${index}`,
        otpValue: currentDigit,
      });

      // focus on the next input
      if (currentDigit && index < lastIndex) {
        inputRefs[index + 1].current.focus();
      }

      if (
        currentDigit &&
        index === lastIndex &&
        Object.values(otpState).includes('')
      ) {
        inputRefs[0].current.focus();
      }

      // Check if all OTP inputs are filled, then trigger login
      const allFilledOtp = {
        ...otpState,
        [`otp${index}`]: currentDigit, // since last state is not updated until this codes run because of asynchronous call
      };

      const allValuesFilled = !Object.values(allFilledOtp).includes('');

      if (allValuesFilled) {
        // Join the OTP and trigger the verification process
        const otp = Object.values(allFilledOtp).join('');
        verifyMobileOtp(otp);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const currentDigit = otpState[`otp${index}`];

      // If the current input is empty, move to the previous input and clear its value
      if (!currentDigit && index > 0) {
        inputRefs[index - 1].current.focus();
        dispatch({
          type: `otp${index - 1}`,
          otpValue: '', // Clear the previous digit
        });
      }
    }
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, [inputRefs]);

  return (
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
                key={Object.keys(otpState)[index]}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={otpState[`otp${index}`]}
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
    // TODO: remove footer from login and otp-login page
  );
};

export default OtpLogin;
