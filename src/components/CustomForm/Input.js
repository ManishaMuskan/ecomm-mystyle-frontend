// import classes from './Input.module.css';

import { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      name,
      type,
      value,
      onChange,
      onKeyDown,
      maxLength,
      minlength,
      autoComplete,
    },
    ref
  ) => {
    return (
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        minLength={minlength}
        autoComplete={autoComplete}
        ref={ref}
      />
    );
  }
);
Input.displayName = 'ForwardedInput';
export default Input;
