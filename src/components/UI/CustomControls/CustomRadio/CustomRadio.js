import classes from './CustomRadio.module.css';

const CustomRadio = ({ title, id, groupName, checked, handleChange }) => {
  return (
    <label htmlFor={id || title} className={classes['custom-radio-label']}>
      <input
        id={id || title}
        name={groupName}
        type="radio"
        checked={checked}
        onChange={() => handleChange()}
        // FLOWOFEXECUTION: - here handleChange fn will be executed with arg e which is a reference of parent callback fn [let's say from VerticalFilters, from there handleGenderChange fn will be called with an e provided by here]
      />
      {title}
      <div className={classes['custom-radio-indicator']} />
    </label>
  );
};

export default CustomRadio;
