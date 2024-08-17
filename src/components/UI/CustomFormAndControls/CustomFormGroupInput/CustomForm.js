import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './CustomForm.module.css';

const CustomForm = forwardRef(
  ({ onSubmit, submitButtonInsideForm, children, submitButtonText }, ref) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit();
    };

    return (
      <form
        ref={ref}
        className={classes['form-container']}
        onSubmit={handleSubmit}>
        {children}
        {submitButtonInsideForm && (
          <button
            type="submit"
            className={`${classes.btn} ${classes.primary} ${classes.lg} ${classes.block} ${classes['submit-button']}`}>
            {submitButtonText}
          </button>
        )}
      </form>
    );
  }
);

CustomForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitButtonInsideForm: PropTypes.bool,
  children: PropTypes.node.isRequired,
  submitButtonText: PropTypes.string,
};

CustomForm.defaultProps = {
  submitButtonInsideForm: true,
  submitButtonText: 'Submit',
};

CustomForm.displayName = 'ForwardedCustomForm';
export default CustomForm;
