import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import classes from './CheckoutPayment.module.css';

const CashOnDeliveryDetails = () => {
  const captchaRef = useRef(null);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    console.log(token);

    captchaRef.current.reset();

    await axios
      .post('http://localhost:2000/post', { token })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes['cod-container']}>
      <div className={classes.header}>Cash On Delivery</div>
      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
      <button type="submit" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CashOnDeliveryDetails;
