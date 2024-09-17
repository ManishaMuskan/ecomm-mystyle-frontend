import classes from './LoadingSpinner.module.css';

// {size=2em, className} - props
const LoadingSpinner = () => {
  return (
    // <div
    //   className={`${classes['spinner-container']} ${className}`}
    //   style={{ width: size, height: size }}>
    //   <div className={classes.spinner} />
    // </div>
    <div className={classes['loader-animation-container']}>
      <div className={classes['spinner-container']}>
        <svg
          className={classes['mystylo-spinner']}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <circle className={classes.circle} cx="50" cy="50" r="45" />
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
