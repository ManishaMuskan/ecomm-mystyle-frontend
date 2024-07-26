import { useReducer, useRef } from 'react';
import classes from './OtpLogin.module.css';
import ImageBox from '../components/UI/ImageBox/ImageBox';
import mobileVerificationImg from '../assets/imgs/mobile-verification.jpg';

const OtpLogin = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'otp0': {
        return {
          ...state,
          otp0: action.otpValue,
        };
      }
      case 'otp1': {
        return {
          ...state,
          otp1: action.otpValue,
        };
      }
      case 'otp2': {
        return {
          ...state,
          otp2: action.otpValue,
        };
      }
      case 'otp3': {
        return {
          ...state,
          otp3: action.otpValue,
        };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    otp0: '',
    otp1: '',
    otp2: '',
    otp3: '',
  });

  const otp1Ref = useRef();
  const otp2Ref = useRef();
  const otp3Ref = useRef();

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
            {/* TODO: Optimize Inputs into separate components */}
            <input
              name="otp0"
              type="tel"
              maxLength="1"
              data-val="0"
              autoComplete="off"
              value={state.otp0}
              onChange={(e) => {
                dispatch({
                  type: 'otp0',
                  otpValue: e.target.value,
                });
                otp1Ref.current.focus();
              }}
            />
            <input
              name="otp1"
              ref={otp1Ref}
              type="tel"
              maxLength="1"
              data-val="1"
              autoComplete="off"
              value={state.otp1}
              onChange={(e) => {
                dispatch({
                  type: 'otp1',
                  otpValue: e.target.value,
                });
                otp2Ref.current.focus();
              }}
            />
            <input
              name="otp2"
              ref={otp2Ref}
              type="tel"
              maxLength="1"
              data-val="2"
              autoComplete="off"
              value={state.otp2}
              onChange={(e) => {
                dispatch({
                  type: 'otp2',
                  otpValue: e.target.value,
                });
                otp3Ref.current.focus();
              }}
            />
            <input
              name="otp3"
              ref={otp3Ref}
              type="tel"
              maxLength="1"
              data-val="3"
              autoComplete="off"
              value={state.otp3}
              onChange={(e) => {
                dispatch({
                  type: 'otp3',
                  otpValue: e.target.value,
                });
              }}
            />
          </div>
          {state.otp0 + state.otp1 + state.otp2 + state.otp3}
          <div>
            <button type="button" className={classes['resend-btn']}>
              RESEND OTP
            </button>
          </div>
        </div>
        <div className={classes['bottom-link']}>
          Log in using <span> Password </span>
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
