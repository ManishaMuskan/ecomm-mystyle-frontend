import { useRef } from 'react';
import WomenFlats from '../../../assets/imgs/products/women_footwear/flats.jpeg';
import womenMojari from '../../../assets/imgs/products/women_footwear/mojari.jpg';
import womenSlippers from '../../../assets/imgs/products/women_footwear/slippers.jpeg';
import classes from './MultiItemCarousel.module.css';

const MultiItemCarousel = () => {
  const visibleBoxRef = useRef();

  const slideLeft = () => {
    const visibleBoxWidth = visibleBoxRef.current.clientWidth;
    visibleBoxRef.current.scrollLeft -= visibleBoxWidth;
  };

  const slideRight = () => {
    const visibleBoxWidth = visibleBoxRef.current.clientWidth;
    visibleBoxRef.current.scrollLeft += visibleBoxWidth;
  };

  return (
    <div className={classes['carousel-container']}>
      <div className={classes['items-wrapper']} ref={visibleBoxRef}>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenMojari} alt="Mojari" />
        </div>
        <div className={classes['item-container']}>
          <img src={WomenFlats} alt="Flats" />
        </div>
        <div className={classes['item-container']}>
          <img src={womenSlippers} alt="Slippers" />
        </div>
      </div>
      <div className={classes['carousel-actions']}>
        <button
          type="button"
          className={classes['pre-btn']}
          onClick={slideLeft}>
          &lsaquo;
        </button>

        <button
          type="button"
          className={classes['next-btn']}
          onClick={slideRight}>
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default MultiItemCarousel;
