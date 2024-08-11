import { useState } from 'react';
import Modal from '../Modal/Modal';
import classes from './CartAddressChange.module.css';

const CartAddressChange = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={classes['address-change-container']}>
        <div className={classes['delivery-address']}>
          <p>
            Deliver to:{' '}
            <span className={classes['recipient-name']}>Manisha</span>
            <span className={classes['pin-code']}>, 834009</span>
          </p>
          <p>
            158, Dubey niwas (near RTC high school/panchmukhi hanuman mandir),
            Bargain village (Shivaji nagar), Booty more, Bariatu, Ranchi
          </p>
        </div>
        <button
          type="button"
          className={classes['change-address-btn']}
          onClick={openModal}>
          Change Address
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        header={<h2>Select Address</h2>}
        content={
          <ul>
            <li>Address 1</li>
            <li>Address 2</li>
          </ul>
        }
        footer={
          <button type="button" onClick={closeModal}>
            Close
          </button>
        }
      />
    </>
  );
};

export default CartAddressChange;
