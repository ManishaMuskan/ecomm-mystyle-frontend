import Toast from './Toast';
import useToastContext from '../../../hooks/useToastContext';
import classes from './Toast.module.css';

const ToastStack = () => {
  const { toasts } = useToastContext();

  return (
    <div className={classes['toast-container']}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={toast.onClose}
          autoClose={toast.autoClose}
        />
      ))}
    </div>
  );
};

export default ToastStack;
