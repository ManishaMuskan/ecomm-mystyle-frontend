import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import classes from './Carousel.module.css';
import ImageTitleCarouselContent from './ImageTitleCarouselContent';

const Carousel = ({ items }) => {
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
      }, 2500);

    return () => clearTimeout(timeOut);
  });

  return (
    <div
      className={classes.carousel}
      onMouseEnter={() => {
        setAutoPlay(false);
      }}
      onMouseLeave={() => setAutoPlay(true)}>
      <div className={classes['carousel-wrapper']}>
        <ImageTitleCarouselContent items={items} currentSlide={currentSlide} />
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
        <div className={classes.indicators}>
          {items.map((item, index) => (
            <FontAwesomeIcon
              icon={faCircle}
              key={item.title}
              className={`${classes.indicator} ${classes[index === currentSlide ? 'indicator-active' : '']}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
