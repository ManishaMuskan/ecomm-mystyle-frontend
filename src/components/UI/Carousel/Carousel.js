import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import classes from './Carousel.module.css';
import ImageTitleCarouselContent from './ImageTitleCarouselContent';

const Carousel = ({
  items,
  showActionButtons = true,
  pauseAutoPlayOnHover = true,
  slideTimeOut = 2500,
  aspectRatioBoxClassName,
  indicatorsClassName,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideLeft = useCallback(() => {
    setCurrentSlide((prevSlideIndex) =>
      prevSlideIndex === 0 ? items.length - 1 : prevSlideIndex - 1
    );
  }, [items.length]);

  const slideRight = useCallback(() => {
    setCurrentSlide((prevSlideIndex) =>
      prevSlideIndex === items.length - 1 ? 0 : prevSlideIndex + 1
    );
  }, [items.length]);

  useEffect(() => {
    const timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, slideTimeOut);

    return () => clearTimeout(timeOut);
  });

  return (
    <div
      className={`${classes.carousel}`}
      onMouseEnter={() => pauseAutoPlayOnHover && setAutoPlay(false)}
      onMouseLeave={() => pauseAutoPlayOnHover && setAutoPlay(true)}>
      <div className={classes['carousel-wrapper']}>
        <ImageTitleCarouselContent
          items={items}
          currentSlide={currentSlide}
          aspectRatioBoxClassName={aspectRatioBoxClassName}
        />
        {showActionButtons && (
          <div className={classes['carousel-slide-actions']}>
            <button
              type="button"
              className={classes['carousel-arrow-left']}
              onClick={slideLeft}>
              &lsaquo;
            </button>
            <button
              type="button"
              className={classes['carousel-arrow-right']}
              onClick={slideRight}>
              &rsaquo;
            </button>
          </div>
        )}
      </div>
      {/* {console.log(currentSlide)} */}
      <div className={classes.indicators}>
        {items.map((item, index) => (
          <FontAwesomeIcon
            icon={faCircle}
            key={item.title || index}
            className={`${classes.indicator} ${indicatorsClassName} ${classes[index === currentSlide ? 'indicator-active' : '']}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
