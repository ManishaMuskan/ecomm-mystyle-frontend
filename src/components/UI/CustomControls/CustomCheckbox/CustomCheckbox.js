import classes from './CustomCheckbox.module.css';

const CustomCheckbox = ({
  id,
  name,
  label,
  checked,
  children,
  handleChange,
}) => {
  return (
    <label htmlFor={id} className={classes['custom-multi-checkbox-label']}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={() => handleChange()}
      />
      {children || label}
      <div className={classes['custom-multi-checkbox-indicator']} />
    </label>
  );
};

export default CustomCheckbox;
