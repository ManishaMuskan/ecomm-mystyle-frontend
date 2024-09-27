import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const portalElement = document.getElementById('overlays');

const Modal = ({ isOpen, onClose, header, content, footer }) => {
  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <>
      {header && (
        <div className={classes['modal-header']}>
          {header}
          <button
            type="button"
            className={classes['modal-close']}
            onClick={onClose}>
            &times;
          </button>
        </div>
      )}
      <div className={classes['modal-content']}>{content}</div>
      {footer && <div className={classes['modal-footer']}>{footer}</div>}
    </>
  );

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{modalContent}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
