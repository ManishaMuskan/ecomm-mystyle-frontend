import classes from './Form.module.css';

const FormInputError = ({ errorMessage }) => {
  return (
    <div className={classes['error-container']}>
      <p>{errorMessage}</p>
    </div>
  );
};

export default FormInputError;
