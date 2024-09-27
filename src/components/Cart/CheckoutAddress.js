import { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import classes from './CheckoutAddress.module.css';
import CheckoutAddressItem from './CheckoutAddress/CheckoutAddressItem';
import PriceDetails from './PriceDetails';
import AddressForm from './CheckoutAddress/AddressForm';

const CheckoutAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressValues, setAddressValues] = useState({});

  // Create a ref to forward to AddressForm component and access CustomForm component
  const addressFormRef = useRef();

  const handleSaveAddress = (formData) => {
    // Handle the form submission
    setAddressValues(formData);
    console.log('Added Address:', formData);
    setIsModalOpen(false); // Close the modal after saving the address
  };

  const handleSaveAddressButtonClick = () => {
    // Trigger form submission using the ref
    if (addressFormRef.current) {
      addressFormRef.current.submitForm();
    }
  };

  return (
    <div className={classes['checkout-address-container']}>
      <div className={classes['checkout-address-left-side']}>
        <div className={classes['address-header-box']}>
          <div className={classes['header-title']}>Select Delivery Address</div>
          <button
            type="button"
            className={classes['add-address-btn']}
            onClick={() => setIsModalOpen(true)}>
            Add new Address
          </button>
        </div>
        <div className={classes['address-list']}>
          <div className={classes['default-address']}>
            <div className={classes['address-default-title']}>
              default address
            </div>
            <CheckoutAddressItem />
          </div>
          <div className={classes['other-addresses']}>
            <div className={classes['address-other-title']}>Other address</div>
            <ul>
              {Array.from(['abc', 'xyz']).map((_) => (
                <li key={`${_}`}>
                  <CheckoutAddressItem />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes['add-address-text-btn']}>
          <button type="button" onClick={() => setIsModalOpen(true)}>
            + Add New Address
          </button>
        </div>
      </div>
      <div className={classes['checkout-address-right-side']}>
        <PriceDetails />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        header="Add Address"
        content={
          <AddressForm
            ref={addressFormRef}
            initialValues={addressValues}
            onSubmit={handleSaveAddress}
          />
        }
        footer={
          <button type="button" onClick={() => handleSaveAddressButtonClick()}>
            Save Address
          </button>
        }
      />
    </div>
  );
};

export default CheckoutAddress;
