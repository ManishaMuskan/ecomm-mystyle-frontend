import { useState, forwardRef, useEffect } from 'react';
import classes from './CustomForm.module.css';
import {
  SvgHiddenPassword,
  SvgShownPassword,
} from '../../../../assets/svgs/SvgIcons';

const CustomFormGroupInput = forwardRef(
  (
    {
      name,
      type = 'text',
      placeholder = '',
      required = false,
      value,
      onChange,
      showPasswordToggle = false,
      validate,
      errorMessage,
    },
    ref
  ) => {
    const [inputType, setInputType] = useState(type);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
      setInputType((prevType) =>
        prevType === 'password' ? 'text' : 'password'
      );
    };

    useEffect(() => {
      if (validate) {
        const validationError = validate(value);
        setError(validationError);
      }
    }, [value, validate]);

    return (
      <div className={classes['form-group']}>
        <input
          ref={ref}
          name={name}
          type={inputType}
          className={classes['form-control']}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
        />
        <span
          className={
            !value
              ? classes['placeholder-alternative']
              : classes['top-placeholder-alternative']
          }>
          {placeholder}
          {required && <span>*</span>}
        </span>
        {type === 'password' && showPasswordToggle && value && (
          <span
            role="button"
            tabIndex={0}
            className={classes['form-control-feedback']}
            onClick={togglePasswordVisibility}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.code === 'Space')
                togglePasswordVisibility();
            }}>
            {inputType === 'password' ? (
              <SvgHiddenPassword />
            ) : (
              <SvgShownPassword />
            )}
          </span>
        )}
        {error && (
          <p className={classes['error-message']}>{errorMessage || error}</p>
        )}
      </div>
    );
  }
);

CustomFormGroupInput.displayName = 'ForwardedCustomFormGroupInput';
export default CustomFormGroupInput;
