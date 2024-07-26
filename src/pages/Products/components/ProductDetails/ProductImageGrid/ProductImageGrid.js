import classes from './ProductImageGrid.module.css';
import ImageBox from '../../../../../components/UI/ImageBox/ImageBox';

const ProductImageGrid = ({ images }) => {
  return (
    <div className={classes['product-image-grid-container']}>
      {images.map((image) => (
        <div key={image.imageURL} className={classes['image-grid-col']}>
          <ImageBox
            imageSrc={image.imageURL}
            imageAltTitle={image.title}
            aspectRatioBoxClassName={classes['product-image-aspect-ratio-box']}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImageGrid;
