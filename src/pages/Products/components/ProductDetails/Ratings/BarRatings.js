import classes from './BarRatings.module.css';
import SpriteIcon from '../../../../../components/UI/SpriteIcon/SpriteIcon';

const BarRatings = ({ ratingInfo }) => {
  return (
    <div className={classes['bar-ratings-container']}>
      {ratingInfo.map((r) => (
        <div key={r.rating} className={classes['bar-rating-wrapper']}>
          <div className={classes['index-rating']}>
            <span>{r.rating}</span>
            <SpriteIcon
              className={classes['sprites-product-ratings-gray-icon']}
            />
          </div>
          <progress min="0" max="70" value={r.count} data-rating={r.rating} />
          <div className={classes['rating-count']}>{r.count}</div>
        </div>
      ))}
    </div>
  );
};

export default BarRatings;
