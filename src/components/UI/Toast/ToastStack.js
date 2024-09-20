import Toast from './Toast';
import useToastContext from '../../../hooks/useToastContext';
import classes from './Toast.module.css';

const ToastStack = () => {
  const { toasts, removeToast } = useToastContext();
  console.log('------toasts-----', toasts);

  return (
    <div className={classes['toast-container']}>
      {toasts.map((toast, index) => (
        <Toast
          key={`${toast.id}-${toast.message}-${index + 1}`}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastStack;
