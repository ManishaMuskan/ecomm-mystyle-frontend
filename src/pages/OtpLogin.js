import { createRef, useMemo, useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileVerificationImg from '../assets/imgs/mobile-verification.jpg';
import Input from '../components/CustomForm/Input';
import ImageBox from '../components/UI/ImageBox/ImageBox';
import useAuthContext from '../hooks/useAuthContext';
import classes from './OtpLogin.module.css';

const OtpLogin = ({ numberOfOtpDigits = 4 }) => {
  const { login } = useAuthContext();
  const initialState = {};

  // creating Array of input references
  const inputRefs = useMemo(
    () =>
      Array(numberOfOtpDigits)
        .fill(0)
        .map(() => createRef()),
    [numberOfOtpDigits]
  );

  function reducer(state, action) {
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e, index) => {
    const { value } = e.target;

    // do not accept if it's not digit
    if (/^\d*$/.test(value)) {
      dispatch({
        type: `otp${index}`,
        otpValue: value,
      });

      // focus on the next input
      if (value && index < numberOfOtpDigits - 1) {
        inputRefs[index + 1].current.focus();
      }

      // if all values are filled and last input is filled, try login
      if (
        value &&
        index === numberOfOtpDigits - 1 &&
        !Object.values(state)
          .slice(0, numberOfOtpDigits - 1) // since last state is not updated until this codes run because of asynchronous call
          .includes('')
      ) {
        login(
          `${Object.values(state)
            .join('')
            .slice(0, numberOfOtpDigits - 1)
            .concat(value)}`
        );
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !state[`otp${index}`] && index > 0) {
      inputRefs[index - 1].current.focus();
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
                key={Object.keys(state)[index]}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={state[`otp${index}`]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
            <button type="button" className={classes['resend-btn']}>
              RESEND OTP
            </button>
          </div>
        </div>
        <div className={classes['bottom-link']}>
          Log in using{' '}
          <Link to="/login/password">
            <span> Password </span>
          </Link>
        </div>
        <div className={classes['bottom-link']}>
          Having trouble logging in? <span> Get help </span>
        </div>
      </div>
    </div>
    // TODO: remove footer from login and otp-login page
  );
};

export default OtpLogin;
