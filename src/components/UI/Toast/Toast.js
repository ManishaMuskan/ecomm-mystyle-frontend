import { useEffect, useState } from 'react';
import classes from './Toast.module.css';

const Toast = ({ className, message, type = 'error', onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleOnClose = () => {
    setShow(false);

    // Cleanup: remove the toast from the DOM after the transition ends
    const cleanupTimer = setTimeout(() => {
      onClose();
    }, 300); // 300ms is the transition duration

    return () => {
      clearTimeout(cleanupTimer);
    };
  };

  return (
    <div
      className={`${classes.toast} ${classes[type]} ${className} ${show ? classes.show : ''}`}>
      <span>{message}</span>
      <button type="button" onClick={handleOnClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
