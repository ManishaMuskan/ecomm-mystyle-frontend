import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import ProductTitle from '../components/ProductTitle/ProductTitle';
import VerticalFilters from '../components/filters/VerticalFilters/VerticalFilters';
import ProductPreviewThumbnail from './Products/ProductPreviewThumbnail';
import classes from './Products.module.css';
import SelectSortOption from './Products/components/SelectSortOption/SelectSortOption';

const productImages = [
  {
    imageSrc:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
  },
  {
    imageSrc:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/ca2a6d62-3cef-461c-bb43-4854516f80d91710410964954-Kook-N-Keech-Men-Tshirts-7491710410964655-4.jpg',
  },
  {
    imageSrc:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/012cc2ac-7909-45ad-8aa5-ee42c7dec8f81710410964989-Kook-N-Keech-Men-Tshirts-7491710410964655-1.jpg',
  },
  {
    imageSrc:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
  },
  {
    imageSrc:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/730201d0-5f79-474b-b809-1fcea4a62b4c1710410964942-Kook-N-Keech-Men-Tshirts-7491710410964655-5.jpg',
  },
  {
    imageSrc:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/d5fc8d8a-34f3-432e-9bf9-821019afe1061710410964966-Kook-N-Keech-Men-Tshirts-7491710410964655-3.jpg',
  },
];

const products = [
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
];

const Products = () => {
  return (
    <div>
      <BreadCrumbs />
      <ProductTitle />
      <div className="flex-stretch">
        <section className={classes['v-filters-container']}>
          <VerticalFilters />
        </section>
        <section className={classes['products-container']}>
          <SelectSortOption />
          <div className={classes['products-wrapper']}>
            {products.map((p) => (
              <ProductPreviewThumbnail key={p.thumbnailImage} product={p} />
            ))}
          </div>
        </section>
      </div>

      {/* for /shop route  */}
      {/* <div>Popular products list of all categories</div> */}
      {/* for /shop/men route  */}
      {/* <div>Filter products list based on men category</div> */}

      {/* for /shop/women route  */}
      {/* <div>Filter products list based on women category</div> */}

      {/* for /shop/kids route  */}
      {/* <div>Filter products list based on kids category</div> */}
    </div>
  );
};

export default Products;
