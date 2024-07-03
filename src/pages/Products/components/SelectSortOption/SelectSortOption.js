/* eslint-disable jsx-a11y/label-has-associated-control */ /* FIXME: fix this */
import { useState } from 'react';
import SpriteIcon from '../../../../components/UI/SpriteIcon/SpriteIcon';
import classes from './SelectSortOption.module.css';

const sortOptions = [
  { label: 'Recommended', value: 'Recommended' },
  { label: "What's New", value: 'new' },
  { label: 'Popularity', value: 'Popularity' },
  { label: 'Better Discount', value: 'discount' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Customer Rating', value: 'rating' },
];

const SelectSortOption = () => {
  const [selectedSort, SetSelectedSort] = useState(sortOptions[0]);

  const handleChange = (event) => {
    const selectedOption = sortOptions.find(
      (o) => o.value === event.target.value
    );
    SetSelectedSort(selectedOption);
  };

  return (
    <div className={classes['sort-products-container']}>
      <div className={classes['sort-products']}>
        <div className={classes['products-sort-by']}>
          <span>
            Sort by : <span>{selectedSort.label}</span>
          </span>
          <SpriteIcon iconClassName={classes['sprites-down-arrow-icon']} />
        </div>

        <ul className={classes['sorting-option-list']}>
          {sortOptions.map((option) => (
            <li key={option.value}>
              <label
                className={`${classes['sort-option-label']} ${option.value === selectedSort.value && classes['sort-selected']}`}>
                <input
                  type="radio"
                  value={option.value}
                  onClick={handleChange}
                />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectSortOption;
