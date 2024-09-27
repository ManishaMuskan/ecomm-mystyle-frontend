import classes from './PriceDetails.module.css';

const PriceDetails = () => {
  return (
    <div className={classes['price-details-container']}>
      <h4>Price Details (7 items)</h4>
      <div className={classes['order-price-breakup-summary']}>
        <div className={classes['price-details-base-row']}>
          <span>Total MRP</span>
          <span>
            ₹<span>35,967</span>
          </span>
        </div>
        <div className={classes['price-details-base-row']}>
          <span>Discount on MRP</span>
          <span className={classes['discounted-price']}>
            -₹<span>27,038</span>
          </span>
        </div>
        <div className={classes['price-details-base-row']}>
          <span>Shipping Fee</span>
          <span>
            ₹<span>0</span>
          </span>
        </div>
        <div className={classes['price-details-base-total']}>
          <span>Total Amount</span>
          <span>
            ₹<span>8949</span>
          </span>
        </div>
      </div>
      <button type="button" className={classes['place-order-btn']}>
        Place Order
      </button>
    </div>
  );
};

export default PriceDetails;
