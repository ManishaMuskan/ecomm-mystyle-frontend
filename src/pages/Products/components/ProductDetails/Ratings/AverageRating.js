import classes from './AverageRating.module.css';
import SpriteIcon from '../../../../../components/UI/SpriteIcon/SpriteIcon';

const AverageRating = ({ averageRating, totalCount }) => {
  return (
    <div className={classes['average-rating-container']}>
      <div className={classes['average-rating']}>
        <span>{Math.round(averageRating * 10) / 10}</span>
        <SpriteIcon className={classes['sprites-good-ratings-icon']} />
      </div>
      <div className={classes['verified-buyers-count']}>
        {totalCount} Verified Buyers
      </div>
    </div>
  );
};

export default AverageRating;
