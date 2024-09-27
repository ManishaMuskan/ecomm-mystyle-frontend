import classes from './Backdrop.module.css';

const Backdrop = ({ onClose, ariaLabel = 'close modal' }) => {
  const handleClick = (event) => {
    // Call the onClose function if provided
    if (onClose) {
      onClose(event);
    }
  };

  const handleKeyDown = (event) => {
    // Handle Escape key to close
    if (event.key === 'Escape' && onClose) {
      onClose(event);
    }
  };

  return (
    <div
      role="presentation" // Indicates it's for visual purposes
      className={classes.backdrop}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel} // Provides an accessible name if needed
      tabIndex="-1" // Ensures the div is not focusable
    />
  );
};

export default Backdrop;
