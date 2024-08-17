import { useState } from 'react';
import CustomCheckbox, {
  CheckboxKind,
} from '../UI/CustomFormAndControls/CustomCheckbox/CustomCheckbox';
import CartItem from './CartItem';
import classes from './CartItemList.module.css';

const CartItemList = () => {
  const [checked, setChecked] = useState(1);

  const handleCheckboxChange = (newCheckedValue) => {
    setChecked(newCheckedValue);
  };

  return (
    <div className={classes['item-list-container']}>
      <div className={classes['no-of-items-selected-indicator-box']}>
        <CustomCheckbox
          checkboxKind={CheckboxKind.TRI_STATE}
          id="selectItems"
          name="selectItems"
          label="10/11 items selected"
          checked={checked}
          handleChange={handleCheckboxChange}
        />
        <div className={classes['cart-bulk-action']}>
          <button type="button">Remove</button>
          <button type="button">Move to Wishlist</button>
        </div>
      </div>
      <div className={classes['cart-items-container']}>
        {Array.from([0, 1, 2, 3, 4]).map((key, index) => (
          <CartItem key={key} item={index} />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
