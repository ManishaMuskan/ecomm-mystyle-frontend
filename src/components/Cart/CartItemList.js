import { useEffect, useState } from 'react';
import CustomCheckbox, {
  CheckboxKind,
} from '../UI/CustomControls/CustomCheckbox/CustomCheckbox';
import classes from './CartItemList.module.css';
import CartItem from './CartItem';

const generateUniqueKey = () => `${Date.now()}-${Math.random()}`;

const CartItemList = () => {
  const [keys, setKeys] = useState([]);
  const [checked, setChecked] = useState(1);

  const handleCheckboxChange = (newCheckedValue) => {
    setChecked(newCheckedValue);
  };

  useEffect(() => {
    // Generate keys once when the component mounts
    const initialKeys = Array.from({ length: 5 }).map(generateUniqueKey);
    setKeys(initialKeys);
  }, []);

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
        {keys.map((key, index) => (
          <CartItem key={key} item={index} />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
