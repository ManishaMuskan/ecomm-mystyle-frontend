import classes from './Ratings.module.css';
import SpriteIcon from '../../../../../components/UI/SpriteIcon/SpriteIcon';
import AverageRating from './AverageRating';
import BarRatings from './BarRatings';

const Ratings = ({ ratings }) => {
  return (
    <div className={classes['detailed-rating-container']}>
      <h4 className={classes['index-header']}>
        Ratings
        <SpriteIcon className={classes['sprites-product-ratings-icon']} />
      </h4>
      <div className={classes['ratings-container']}>
        <AverageRating
          averageRating={ratings.averageRating}
          totalCount={ratings.totalCount}
        />
        <BarRatings
          ratingInfo={ratings.ratingInfo.sort((a, b) =>
            a.rating > b.rating ? -1 : 1
          )}
        />
      </div>
    </div>
  );
};

export default Ratings;
