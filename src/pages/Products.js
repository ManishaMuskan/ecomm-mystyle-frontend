import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import ProductTitle from '../components/ProductTitle/ProductTitle';

const Products = () => {
  return (
    <div>
      <BreadCrumbs />
      <ProductTitle />
      {/* for /shop route  */}
      <div>Popular products list of all categories</div>

      {/* for /shop/men route  */}
      <div>Filter products list based on men category</div>

      {/* for /shop/women route  */}
      <div>Filter products list based on women category</div>

      {/* for /shop/kids route  */}
      <div>Filter products list based on kids category</div>
    </div>
  );
};

export default Products;
