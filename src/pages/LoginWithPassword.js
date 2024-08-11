import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SvgHiddenPassword, SvgShownPassword } from '../assets/svgs/SvgIcons';
import classes from './LoginWithPassword.module.css';

const LoginWithPassword = () => {
  const [loginCreds, setLoginCreds] = useState({
    mobileOrEmail: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const passwordInputRef = useRef();

  const handleLoginCredsChange = (e) => {
    setLoginCreds({ ...loginCreds, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
    if (showPassword) {
      passwordInputRef.current.type = 'text';
    } else {
      passwordInputRef.current.type = 'password';
    }
  };

  return (
    <div className={classes['login-with-password-main-container']}>
      <div className={classes['login-box']}>
        <h3>Login to your account</h3>
        <form className={classes['form-container']}>
          <div className={classes['form-group']}>
            <input
              name="mobileOrEmail"
              type="text"
              className={classes['form-control']}
              value={loginCreds.mobileOrEmail}
              onChange={handleLoginCredsChange}
            />
            <span
              className={
                !loginCreds.MobileOrEmail
                  ? classes['placeholder-alternative']
                  : classes['top-placeholder-alternative']
              }>
              Email or Mobile Number
              <span>*</span>
            </span>
            <i className="bar" />
          </div>
          <div className={classes['form-group']}>
            <input
              ref={passwordInputRef}
              name="password"
              type="password"
              className={classes['form-control']}
              value={loginCreds.password}
              onChange={handleLoginCredsChange}
            />
            <span
              className={
                !loginCreds.password
                  ? classes['placeholder-alternative']
                  : classes['top-placeholder-alternative']
              }>
              Password<span>*</span>
            </span>
            {loginCreds.password && (
              <span
                role="button"
                tabIndex={-1}
                className={classes['form-control-feedback']}
                onClick={handleShowPassword}
                onKeyDown={handleShowPassword}>
                {!showPassword ? <SvgHiddenPassword /> : <SvgShownPassword />}
              </span>
            )}

            <i className="bar" />
          </div>
          <div className={classes['form-group']}>
            <button
              type="button"
              className={`${classes.btn} ${classes.primary} ${classes.lg} ${classes.block} ${classes['submit-button']}`}>
              LOGIN
            </button>
          </div>
        </form>
        <div className={classes['auth-page-links']}>
          Forgot your password?
          <Link to="/forgot" className={classes['auth-page-link']}>
            Reset here
          </Link>
        </div>
        <div className={classes['auth-page-links']}>
          Have trouble logging in?
          <span className={classes['auth-page-link']}>Get Help</span>
        </div>
      </div>
    </div>
  );
};

export default LoginWithPassword;
