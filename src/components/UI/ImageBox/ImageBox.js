import classes from './ImageBox.module.css';

const ImageBox = ({ imageSrc, imageAltTitle, aspectRatioBoxClassName }) => {
  return (
    <div
      className={`${classes['base-aspect-ratio-box']} ${aspectRatioBoxClassName}`}>
      <div className={classes['base-aspect-ratio-img-box']}>
        <img src={imageSrc} alt={imageAltTitle} />
      </div>
    </div>
  );
};

export default ImageBox;
