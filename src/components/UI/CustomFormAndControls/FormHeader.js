import classes from './CustomFormGroupInput/CustomForm.module.css';

const FormHeader = ({ children }) => {
  return <div className={classes['form-header']}>{children}</div>;
};

export default FormHeader;
