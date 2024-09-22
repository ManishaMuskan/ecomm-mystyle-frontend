import { useEffect, useState, useCallback } from 'react';
import classes from './Toast.module.css';
import useToastContext from '../../../hooks/useToastContext';
import { DEFAULT_TOAST_AUTO_CLOSE_TIME } from '../../../config/appConstants';

const Toast = ({
  id,
  className,
  message,
  type = 'error',
  onClose,
  autoClose = DEFAULT_TOAST_AUTO_CLOSE_TIME,
}) => {
  const [show, setShow] = useState(false);
  const { removeToast } = useToastContext();

  const handleRemoveToast = useCallback(() => {
    setShow(false);

    // Cleanup: remove the toast from the DOM after the transition ends
    const transitionEndsTimer = setTimeout(() => {
      removeToast(id);
      if (onClose) {
        onClose();
      }
    }, 300); // 300ms is the transition duration

    return () => {
      clearTimeout(transitionEndsTimer); // Cleanup if this function is called again before the transition ends
    };
  }, [id, onClose, removeToast]);

  useEffect(() => {
    setShow(true);

    let autoCloseTimeout;
    if (autoClose !== false) {
      // TODO: handle autoClose after duration
      autoCloseTimeout = setTimeout(() => {
        handleRemoveToast();
      }, autoClose);
    }

    return () => {
      clearInterval(autoCloseTimeout);
    };
  }, [autoClose, handleRemoveToast]);

  return (
    <div
      className={`${classes.toast} ${classes[type]} ${className} ${show ? classes.show : ''}`}>
      <span>{message}</span>
      <button type="button" onClick={handleRemoveToast}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
