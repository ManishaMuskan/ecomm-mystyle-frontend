import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductPreviewThumbnail.module.css';
import Carousel from '../../components/UI/Carousel/Carousel';
import ImageBox from '../../components/UI/ImageBox/ImageBox';
import SpriteIcon from '../../components/UI/SpriteIcon/SpriteIcon';

const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
const ProductPreviewThumbnail = () => {
  const [currentActiveProduct, setCurrentActiveProduct] = useState(null);

  const showSliderPreview = (index) => {
    setCurrentActiveProduct(index);
  };

  const hideSliderPreview = () => {
    setCurrentActiveProduct(null);
  };

  return (
    <section
      className={`flex-center-wrap ${classes['product-thumbnail-container']}`}>
      {product.map((p) => (
        <Link to="/#" key={p} className={classes['product-thumbnail-box']}>
          <div
            className={classes['product-thumbnail-inner-box']}
            onMouseEnter={() => showSliderPreview(p)}
            onMouseLeave={hideSliderPreview}>
            {!(currentActiveProduct === p) && (
              <div className={classes['product-image-preview']}>
                <ImageBox
                  imageSrc="/images/products/men/top-wear/t-shirts/Kook N Keech - Men Conversational Printed Polo Collar T-shirt/6cd516ae-ff26-4cf1-82bb-1f5f8a52feea1710410964977-Kook-N-Keech-Men-Tshirts-7491710410964655-2.jpg"
                  imageAltTitle="tshirt"
                />
                <div className={classes['product-ratings']}>
                  <span>4.3</span>
                  <SpriteIcon
                    iconClassName={classes['sprites-green-solid-star-icon']}
                  />
                  <span className={classes['product-ratings-count']}>
                    19.9k
                  </span>
                </div>
              </div>
            )}
            {currentActiveProduct === p && (
              <div className={classes['product-slider-preview']}>
                <div className={classes['image-slider-container']}>
                  <Carousel
                    items={productImages}
                    showActionButtons={false}
                    pauseAutoPlayOnHover={false}
                    slideTimeOut={1000}
                  />
                </div>
              </div>
            )}
          </div>
          <div className={classes['product-meta-info']}>
            <h3 className={classes['product-brand-name']}>Mast & Harbour</h3>
            <h4
              className={classes['product-title']}
              title="Men Slim Fit Casual Sustainable Shirt Men Slim Fit Casual
              Sustainable Shirt special">
              Men Slim Fit Casual Sustainable Shirt Men Slim Fit Casual
              Sustainable Shirt special
            </h4>
            <h4 className={classes['product-sizes']}>Sizes : S</h4>
            <div className={classes['product-price']}>
              <span>
                <span className={classes['product-discounted-price']}>
                  Rs. 1899
                </span>
                <span className={classes['product-strike']}> Rs. 9999</span>
              </span>
              <span className={classes['product-discount-percentage']}>
                (81% OFF)
              </span>
            </div>
          </div>
          <div className={classes['product-actions']}>
            <button type="button" className={classes['product-wishlist-btn']}>
              <SpriteIcon
                iconClassName={classes['sprite-product-not-wishlisted-icon']}
              />
              <span>Wishlist</span>
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductPreviewThumbnail;
