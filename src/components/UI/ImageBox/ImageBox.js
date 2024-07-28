import classes from './ImageBox.module.css';

const ImageBox = ({ imageSrc, imageAltTitle, className }) => {
  return (
    <div className={`${classes['base-aspect-ratio-box']} ${className}`}>
      <div className={classes['base-aspect-ratio-img-box']}>
        <img src={imageSrc} alt={imageAltTitle} />
      </div>
    </div>
  );
};

export default ImageBox;
