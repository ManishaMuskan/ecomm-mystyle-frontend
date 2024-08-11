import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductPreviewThumbnail.module.css';
import Carousel from '../../../../components/UI/Carousel/Carousel';
import ImageBox from '../../../../components/UI/ImageBox/ImageBox';
import SpriteIcon from '../../../../components/UI/SpriteIcon/SpriteIcon';
import PriceBox from '../../../../components/PriceBox/PriceBox';

const ProductPreviewThumbnail = ({ product, link }) => {
  const [currentActiveProduct, setCurrentActiveProduct] = useState(false);

  const showSliderPreview = () => {
    setCurrentActiveProduct(true);
  };

  const hideSliderPreview = () => {
    setCurrentActiveProduct(false);
  };

  return (
    <Link
      to={link}
      className={classes['product-thumbnail-box']}
      onMouseEnter={() => showSliderPreview()}
      onMouseLeave={hideSliderPreview}>
      <div className={classes['product-thumbnail-inner-box']}>
        {!currentActiveProduct && (
          <div className={classes['product-image-preview']}>
            <ImageBox
              imageSrc={product.thumbnailImage}
              imageAltTitle="tshirt"
            />
            <div className={classes['product-ratings']}>
              <span>4.3</span>
              <SpriteIcon
                className={classes['sprites-green-solid-star-icon']}
              />
              <span className={classes['product-ratings-count']}>19.9k</span>
            </div>
          </div>
        )}
        {currentActiveProduct && (
          <div className={classes['product-slider-preview']}>
            <div className={classes['image-slider-container']}>
              <Carousel
                items={product.productImages}
                showActionButtons={false}
                pauseAutoPlayOnHover={false}
                slideTimeOut={1000}
                indicatorsClassName={
                  classes['carousel-indicators-product-slider-preview']
                }
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
          Men Slim Fit Casual Sustainable Shirt Men Slim Fit Casual Sustainable
          Shirt special
        </h4>
        <h4 className={classes['product-sizes']}>Sizes : S</h4>
        <PriceBox />
      </div>
      <div className={classes['product-actions']}>
        <button type="button" className={classes['product-wishlist-btn']}>
          <SpriteIcon
            className={classes['sprite-product-not-wishlisted-icon']}
          />
          <span>Wishlist</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductPreviewThumbnail;
