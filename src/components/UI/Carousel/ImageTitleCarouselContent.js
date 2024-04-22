import classes from './Carousel.module.css';

const ImageTitleCarouselContent = ({ items, currentSlide }) => {
  return items.map((item, index) => (
    <div
      key={item.title || index}
      className={`${classes['carousel-card']} ${classes[index === currentSlide ? 'carousel-card-active' : '']}`}>
      <img src={item.imageSrc} alt={item.title} />
      {item.title && (
        <div className={classes['card-overlay']}>
          <p className={classes['card-title']}>{item.title}</p>
        </div>
      )}
    </div>
  ));
};

export default ImageTitleCarouselContent;
