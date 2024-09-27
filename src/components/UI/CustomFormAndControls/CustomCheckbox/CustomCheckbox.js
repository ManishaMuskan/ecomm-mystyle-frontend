import classes from './CustomCheckbox.module.css';

export const CheckboxKind = {
  BI_STATE: 'biState',
  TRI_STATE: 'triState',
};

const CustomCheckbox = ({
  id,
  name,
  label,
  checked,
  children,
  handleChange,
  className,
  checkboxKind = CheckboxKind.BI_STATE, // Default to 'biState' if checkboxKind is not provided,
}) => {
  let checkboxClass = '';

  // Determine the checkbox class based on the kind and the checked state
  if (checkboxKind === CheckboxKind.TRI_STATE) {
    if (checked === 1) {
      // 1 represents "some selected"
      checkboxClass = classes['some-selected'];
    } else if (checked === 2) {
      // 2 represents "all selected"
      checkboxClass = classes['all-selected'];
    } else {
      // 0 or any other value represents "no selected"
      checkboxClass = classes['no-selected'];
    }
  } else {
    checkboxClass = checked ? classes['all-selected'] : classes['no-selected'];
  }

  // Handle the checkbox change
  const onCheckboxChange = () => {
    let newCheckedValue;
    if (checkboxKind === CheckboxKind.TRI_STATE) {
      newCheckedValue = (checked + 1) % 3; // Cycle through 0 -> 1 -> 2 -> 0
    } else {
      newCheckedValue = !checked; // Toggle between true and false
    }
    handleChange(newCheckedValue);
  };

  return (
    <label
      htmlFor={id}
      className={`${classes['custom-checkbox-label']} ${className}`}>
      <input
        id={id || name}
        name={name || id}
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChange}
      />
      {children || label}
      <div
        className={`${classes['custom-checkbox-indicator']} ${checkboxClass}`}
      />
    </label>
  );
};

export default CustomCheckbox;
