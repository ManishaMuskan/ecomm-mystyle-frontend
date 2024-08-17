import { useState } from 'react';
import classes from './VerticalFilters.module.css';
import CustomRadio from '../../../../components/UI/CustomFormAndControls/CustomRadio/CustomRadio';
import CustomMultiCheckbox from '../../../../components/UI/CustomFormAndControls/CustomCheckbox/CustomCheckbox'; // NOTE: default export can be imported by another name

const VerticalFilters = ({ vFilters }) => {
  const [filters, setFilters] = useState(vFilters);

  const handleGenderChange = (index) => {
    const updatedGender = [...filters.gender];
    updatedGender[index].checked = !updatedGender[index].checked;
    setFilters({ ...filters, gender: updatedGender });
  };

  const handleCategoryChange = (value) => {
    const updatedCategories = { ...filters.categories };
    const checkedValues = updatedCategories.checkedValues.includes(value)
      ? updatedCategories.checkedValues.filter((val) => val !== value)
      : [...updatedCategories.checkedValues, value];
    updatedCategories.checkedValues = checkedValues;
    setFilters({ ...filters, categories: updatedCategories });
  };

  const handleBrandChange = (value) => {
    const updatedBrand = { ...filters.brand };
    const checkedValues = updatedBrand.checkedValues.includes(value)
      ? updatedBrand.checkedValues.filter((val) => val !== value)
      : [...updatedBrand.checkedValues, value];
    updatedBrand.checkedValues = checkedValues;
    setFilters({ ...filters, brand: updatedBrand });
  };
  return (
    <>
      <div className={classes['filter-header']}>
        <h4>Filters</h4>
        <button type="button">Clear all</button>
      </div>
      <div className={classes['v-filters-content-wrapper']}>
        {filters.gender && (
          <ul className={classes['gender-filter']}>
            {filters.gender.map((gender, index) => (
              <li key={gender.title}>
                <CustomRadio
                  id={`gender-${gender.title}`}
                  groupName="gender"
                  title={gender.title}
                  checked={gender.checked}
                  handleChange={() => handleGenderChange(index)}
                />
              </li>
            ))}
          </ul>
        )}
        {filters.categories && (
          <ul className={classes['category-filter']}>
            <h3>Categories</h3>
            {filters.categories.filterValues.map((category) => (
              <li key={category.id}>
                <CustomMultiCheckbox
                  id={category.id}
                  name={category.id}
                  value={category.value}
                  // label={`${category.value} (${category.count})`} // NOTE:if no external class to be added
                  checked={filters.categories.checkedValues.includes(
                    category.value
                  )}
                  handleChange={() => handleCategoryChange(category.value)}>
                  {category.value}
                  <span className={classes['filtered-product-num']}>
                    {' '}
                    ({category.count})
                  </span>
                </CustomMultiCheckbox>
              </li>
            ))}
          </ul>
        )}
        {filters.brand && (
          <ul className={classes['brand-filter']}>
            <h3>Brand</h3>
            {filters.brand.filterValues.map((brand) => (
              <li key={brand.id}>
                <CustomMultiCheckbox
                  id={brand.id}
                  name={brand.id}
                  value={brand.value}
                  checked={filters.brand.checkedValues.includes(brand.value)}
                  handleChange={() => handleBrandChange(brand.value)}>
                  {brand.value}
                  <span className={classes['filtered-product-num']}>
                    {' '}
                    ({brand.count})
                  </span>
                </CustomMultiCheckbox>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default VerticalFilters;
