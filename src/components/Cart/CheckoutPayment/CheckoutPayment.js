import { useState } from 'react';
import PriceDetails from '../PriceDetails';
import classes from './CheckoutPayment.module.css';
import CashOnDeliveryDetails from './CashOnDeliveryDetails';
import UPIPaymentDetails from './UPIPaymentDetails';
import CardPaymentDetails from './CardPaymentDetails';

const paymentModes = [
  {
    option: 'cod',
    label: 'Cash on delivery',
  },
  {
    option: 'upi',
    label: 'UPI payment',
  },
  {
    option: 'card',
    label: 'Credit/Debit Card',
  },
];

const CheckoutPayment = () => {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(
    paymentModes[0].option
  );

  const handlePaymentModeSelection = (option) => {
    setSelectedPaymentMode(option);
  };

  return (
    <div className={classes['checkout-payment-container']}>
      <div className={classes['payment-left']}>
        <h4>Choose Payment method</h4>
        <div className={classes['payment-mode-container']}>
          <div className={classes['payment-modes']}>
            <ul>
              {paymentModes.map((mode) => (
                <li
                  role="presentation"
                  onKeyDown={(e) => {
                    if (e.key === 'space')
                      handlePaymentModeSelection(mode.option);
                  }}
                  key={mode.option}
                  onClick={() => handlePaymentModeSelection(mode.option)}
                  className={
                    selectedPaymentMode === mode.option ? classes.selected : ''
                  }>
                  <span>{mode.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes['payment-mode-details']}>
            {selectedPaymentMode === 'cod' && <CashOnDeliveryDetails />}
            {selectedPaymentMode === 'upi' && <UPIPaymentDetails />}
            {selectedPaymentMode === 'card' && <CardPaymentDetails />}
          </div>
        </div>
      </div>
      <div className={classes['payment-right']}>
        <PriceDetails />
      </div>
    </div>
  );
};

export default CheckoutPayment;
