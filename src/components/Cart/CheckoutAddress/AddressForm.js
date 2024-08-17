import { forwardRef, useState, useImperativeHandle } from 'react';
import CustomForm from '../../UI/CustomFormAndControls/CustomFormGroupInput/CustomForm';
import CustomFormGroupInput from '../../UI/CustomFormAndControls/CustomFormGroupInput/CustomFormGroupInput';
import classes from './AddressForm.module.css';
import FormHeader from '../../UI/CustomFormAndControls/FormHeader';

const AddressForm = forwardRef(({ initialValues = {}, onSubmit }, ref) => {
  const [addressData, setAddressData] = useState(initialValues);

  const handleAddressDataInputChange = (event) => {
    const { name, value } = event.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(addressData); // pass data and trigger the onSubmit function in parent
  };

  // Exposing the handleSubmit function to the parent through ref
  useImperativeHandle(ref, () => ({
    submitForm: () => {
      handleSubmit(new Event('submit', { cancelable: true }));
    },
  }));

  return (
    <CustomForm
      ref={ref}
      submitButtonInsideForm={false}
      onSubmit={handleSubmit}
      className={classes['address-form']}>
      <FormHeader>Contact details</FormHeader>
      <CustomFormGroupInput
        name="name"
        type="text"
        value={addressData.name || ''}
        onChange={handleAddressDataInputChange}
        placeholder="Name"
        required
      />
      <CustomFormGroupInput
        name="mobile"
        type="text"
        value={addressData.mobile || ''}
        onChange={handleAddressDataInputChange}
        placeholder="Mobile No."
        required
      />

      <FormHeader>Address</FormHeader>
      <CustomFormGroupInput
        name="pinCode"
        type="text"
        value={addressData.pinCode || ''}
        onChange={handleAddressDataInputChange}
        placeholder="Pin Code"
        required
      />
      <CustomFormGroupInput
        name="streetAddress"
        type="text"
        value={addressData.streetAddress || ''}
        onChange={handleAddressDataInputChange}
        placeholder="Address (House No, Building, Street, Area)"
        required
      />
      <CustomFormGroupInput
        name="locality"
        type="text"
        value={addressData.locality || ''}
        onChange={handleAddressDataInputChange}
        placeholder="Locality/Town"
        required
      />

      <CustomFormGroupInput
        name="city"
        type="text"
        value={addressData.city || ''}
        onChange={handleAddressDataInputChange}
        placeholder="City/District"
        required
      />

      <CustomFormGroupInput
        name="state"
        type="text"
        value={addressData.state || ''}
        onChange={handleAddressDataInputChange}
        placeholder="State"
        required
      />
    </CustomForm>
  );
});

AddressForm.displayName = 'ForwardedAddressForm';

export default AddressForm;
