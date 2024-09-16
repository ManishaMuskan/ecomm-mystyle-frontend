import classes from './Toast.module.css';

const Toast = ({ className, message, type = 'error', onClose }) => {
  return (
    <div className={`${classes.toast} ${classes[type]} ${className}`}>
      <span>{message}</span>
      <button type="button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
