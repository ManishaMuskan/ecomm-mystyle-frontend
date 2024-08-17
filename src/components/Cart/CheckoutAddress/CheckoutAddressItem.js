import { useRef, useState } from 'react';
import Modal from '../../Modal/Modal';
import CustomRadio from '../../UI/CustomFormAndControls/CustomRadio/CustomRadio';
import AddressForm from './AddressForm';
import classes from './CheckoutAddressItem.module.css';

const CheckoutAddressItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressValues, setAddressValues] = useState({
    street: '123 Main St',
    city: 'Metropolis',
  });
  const addressFormRef = useRef();

  const handleUpdateAddress = (formData) => {
    // Handle the form submission
    setAddressValues(formData);
    console.log('Edited Address:', formData);
    setIsModalOpen(false); // Close the modal after updating the address
  };

  const handleUpdateAddressButtonClick = () => {
    // Trigger form submission using the ref
    if (addressFormRef.current) {
      addressFormRef.current.submitForm();
    }
  };

  return (
    <div className={classes['address-item-container']}>
      <div className={classes['address-select-radio']}>
        <CustomRadio
          id="defaultAddress"
          groupName="address"
          checked
          handleChange={() => {}}
        />
      </div>
      <div className={classes['delivery-details']}>
        <div className={classes['address-details']}>
          <p className={classes.name}>Manisha</p>
          <p className={classes['address-field']}>
            158, Dubey niwas (near RTC high school/panchmukhi hanuman mandir),
            Bargain village (Shivaji nagar), Booty more, Bariatu
          </p>
          <p className={classes['address-field']}>
            <span>Ranchi, Jharkhand - </span>
            <span>834009</span>
          </p>
        </div>
        <div className={classes.mobile}>
          <span>Mobile:</span>
          <span>799348090</span>
        </div>
        <div className={classes['delivery-address-actions']}>
          <button type="button">Remove</button>
          <button type="button" onClick={() => setIsModalOpen(true)}>
            Edit
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        header="Edit Address"
        content={
          <AddressForm
            ref={addressFormRef}
            initialValues={addressValues}
            onSubmit={handleUpdateAddress}
          />
        }
        footer={
          <button
            type="button"
            onClick={() => handleUpdateAddressButtonClick()}>
            Update Address
          </button>
        }
      />
    </div>
  );
};

export default CheckoutAddressItem;
