import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import classes from './CustomDropdown.module.css';
import { SvgDropdownArrow } from '../../../../assets/svgs/SvgIcons';

const CustomDropdown = ({ mainLabel, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // NOTE: If the click was outside, the dropdown menu is closed by updating the isOpen state to false
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={classes['dropdown-toggle']}>
        {`${mainLabel}: ${selectedOption ? selectedOption.label : ''}`}{' '}
        <span>
          <SvgDropdownArrow />
        </span>
      </button>
      {isOpen && (
        <ul className={classes['dropdown-menu']}>
          {options.map((option) => (
            <li key={option.value} className="dropdown-item">
              <button
                type="button"
                onClick={() => handleOptionSelect(option)}
                className={`${classes['dropdown-option']} ${selectedOption.value === option.value ? classes.selected : ''}`}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomDropdown;
