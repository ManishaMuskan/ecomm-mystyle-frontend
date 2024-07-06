import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import VerticalFilters from './components/VerticalFilters/VerticalFilters';
import ProductPreviewThumbnail from './components/ProductPreviewThumbnail/ProductPreviewThumbnail';
import classes from './Products.module.css';
import SelectSortOption from './components/SelectSortOption/SelectSortOption';
import Pagination from '../../components/Pagination/Pagination';

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
  {
    thumbnailImage:
      '/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg',
    productImages,
  },
];

const vFilters = {
  isClearAll: false,
  apiFetchInProgress: false,
  gender: [
    {
      title: 'Men',
      checked: false,
      value: ['men', 'men women'],
    },
    {
      title: 'Women',
      checked: false,
      value: ['women', 'men women'],
    },
    {
      title: 'Boys',
      checked: false,
      value: ['boys', 'boys girls'],
    },
    {
      title: 'Girls',
      checked: false,
      value: ['girls', 'boys girls'],
    },
  ],
  categories: {
    id: 'Categories',
    filterValues: [
      {
        id: 'Tshirts',
        value: 'Tshirts',
        count: 126030,
        meta: '',
        pLevel: '',
      },
      {
        id: 'Lounge Tshirts',
        value: 'Lounge Tshirts',
        count: 1045,
        meta: '',
        pLevel: '',
      },
    ],
    checkedValues: [],
  },
  brand: {
    id: 'Brand',
    filterValues: [
      {
        id: 'Roadster',
        value: 'Roadster',
        count: 3819,
        meta: '',
        pLevel: '',
      },
      {
        id: 'Friskers',
        value: 'Friskers',
        count: 2676,
        meta: '',
        pLevel: '',
      },
      {
        id: 'HRX by Hrithik Roshan',
        value: 'HRX by Hrithik Roshan',
        count: 2260,
        meta: '',
        pLevel: '',
      },
      {
        id: 'Tommy Hilfiger',
        value: 'Tommy Hilfiger',
        count: 2250,
        meta: '',
        pLevel: '',
      },
      {
        id: 'WROGN',
        value: 'WROGN',
        count: 2084,
        meta: '',
        pLevel: '',
      },
      {
        id: 'VIMAL JONNEY',
        value: 'VIMAL JONNEY',
        count: 1832,
        meta: '',
        pLevel: '',
      },
      {
        id: 'Jack & Jones',
        value: 'Jack & Jones',
        count: 1761,
        meta: '',
        pLevel: '',
      },
      {
        id: 'Puma',
        value: 'Puma',
        count: 1691,
        meta: '',
        pLevel: '',
      },
      {
        id: 'U.S. Polo Assn.',
        value: 'U.S. Polo Assn.',
        count: 1570,
        meta: '',
        pLevel: '',
      },
    ],
    checkedValues: [],
  },
};

const Products = () => {
  return (
    <div>
      <BreadCrumbs />
      <ProductTitle />
      <div className="flex-stretch">
        <section className={classes['v-filters-container']}>
          <VerticalFilters vFilters={vFilters} />
        </section>
        <section className={classes['products-container']}>
          <SelectSortOption />
          <div className={classes['products-wrapper']}>
            {products.map((p) => (
              <ProductPreviewThumbnail
                key={p.thumbnailImage}
                product={p}
                link="/product-details"
              />
            ))}
          </div>
          <Pagination totalPages={10} />
        </section>
      </div>
    </div>
  );
};

export default Products;
