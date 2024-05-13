import classes from './ProductTitle.module.css';

const ProductTitle = () => {
  return (
    <section className={classes['product-title-container']}>
      <span className={classes['product-title-title']}>Jimmy Choo Saree</span>
      <span className={classes['product-title-count']}> - 204981 items</span>
      <span className={classes['product-title-corrections']}>
        No results found for <strong>jimmy choo saree</strong>. Showing results
        for <strong>saree</strong> instead.
      </span>
    </section>
  );
};

export default ProductTitle;
