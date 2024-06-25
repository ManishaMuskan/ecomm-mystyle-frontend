import ImageBox from '../ImageBox/ImageBox';
import classes from './Carousel.module.css';

const ImageTitleCarouselContent = ({
  items,
  currentSlide,
  aspectRatioBoxClassName,
}) => {
  return items.map((item, index) => (
    <div
      key={item.title || index}
      className={`${classes['carousel-card']} ${classes[index === currentSlide ? 'carousel-card-active' : '']}`}>
      <ImageBox
        imageSrc={item.imageSrc}
        imageAltTitle={item.title}
        aspectRatioBoxClassName={aspectRatioBoxClassName}
      />
      {item.title && (
        <div className={classes['card-overlay']}>
          <p className={classes['card-title']}>{item.title}</p>
        </div>
      )}
    </div>
  ));
};

export default ImageTitleCarouselContent;
