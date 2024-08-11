import classes from './PriceBox.module.css';

const PriceBox = () => {
  return (
    <div className={classes['product-price']}>
      <span>
        <span className={classes['product-discounted-price']}>Rs. 1899</span>
        <span className={classes['product-strike']}> Rs. 9999</span>
      </span>
      <span className={classes['product-discount-percentage']}>(81% OFF)</span>
    </div>
  );
};

export default PriceBox;
