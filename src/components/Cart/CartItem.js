import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SvgCloseIcon,
  SvgReturnOrderIcon,
  SvgRightGreenTick,
} from '../../assets/svgs/SvgIcons';
import CustomCheckbox from '../UI/CustomFormAndControls/CustomCheckbox/CustomCheckbox';
import ImageBox from '../UI/ImageBox/ImageBox';
import classes from './CartItem.module.css';
import PriceBox from '../PriceBox/PriceBox';
import CustomDropdown from '../UI/CustomFormAndControls/CustomDropdown/CustomDropdown';

const item = {
  title: 'product title',
  thumbnailImageUrl:
    '/images/products/men/top-wear/shirts/Mast&Harbour-Men Slim Fit Casual/585db9fe-1df0-458d-b218-6f514eabb9601553068826233-Mast--Harbour-Men-Shirts-4141553068825026-1.jpg',
  selected: 1,
};

const CartItem = () => {
  const [checked, setChecked] = useState(item.selected);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);

  const sizeOptions = [
    { value: 'size_s', label: 'S' },
    { value: 'size_m', label: 'M' },
    { value: 'size_l', label: 'L' },
    { value: 'size_xl', label: 'XL' },
  ];

  const QtyOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
  ];

  const handleSizeSelect = (option) => {
    setSelectedSize(option.value);
    console.log(selectedSize);
  };

  const handleQtySelect = (option) => {
    setSelectedQty(option.value);
    console.log(selectedQty);
  };

  const handleCheckboxChange = (newCheckedValue) => {
    setChecked(newCheckedValue);
  };

  return (
    <div className={classes['cart-item-box']}>
      <CustomCheckbox
        className={classes['item-select-checkbox']}
        id={`${item.title}`}
        checked={checked}
        handleChange={handleCheckboxChange}
      />
      <div className={classes['cart-item-image-and-details-box']}>
        <ImageBox
          imageAltTitle={item.title}
          imageSrc={item.thumbnailImageUrl}
          className={classes['cart-item-thumbnail-image']}
        />
        <div className={classes['cart-item-details']}>
          <h4 className={classes['item-brand']}>satrangi</h4>
          <Link to="/" className={classes['item-link']}>
            Ethnic Motifs Sequinned Pure Georgette Saree
          </Link>
          <p className={classes['item-seller-data']}>
            Sold By: <span>SATRANI FASHION</span>
          </p>
          <div className={classes['size-and-qty-box']}>
            <CustomDropdown
              mainLabel="Size"
              options={sizeOptions}
              onSelect={handleSizeSelect}
            />
            <CustomDropdown
              mainLabel="Qty"
              options={QtyOptions}
              onSelect={handleQtySelect}
            />
          </div>
          <PriceBox />
          <div className={classes['return-order-box']}>
            <SvgReturnOrderIcon className={classes['return-order-icon']} />
            <span className={classes['return-days']}>14 days </span> return
            available
          </div>
          <div className={classes['delivery-period']}>
            <SvgRightGreenTick />
            Delivery between: <span> 13 Aug - 15 Aug</span>
          </div>
        </div>
      </div>

      <SvgCloseIcon className={classes['cancel-item-btn']} />
    </div>
  );
};

export default CartItem;
