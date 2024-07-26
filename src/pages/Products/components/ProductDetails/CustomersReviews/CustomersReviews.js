import {
  SvgLikeDislike,
  SvgWhiteStar,
} from '../../../../../assets/svgs/SvgIcons';
import classes from './CustomersReviews.module.css';

const CustomersReviews = ({ reviewInfo }) => {
  const { reviewsCount, topReviews } = reviewInfo;
  return (
    <div>
      <h4 className={classes.header}>Customer Reviews ({reviewsCount})</h4>
      <div className={classes['customer-reviews-container']}>
        {topReviews.map((review) => (
          <div key={review.timestamp} className={classes['review-wrapper']}>
            <div
              className={`${classes['rating-box']} ${classes[`user-review-${review.userRating}-star${review.userRating > 1 ? 's' : ''}`]}`}>
              <span>{review.userRating}</span>
              <SvgWhiteStar />
            </div>
            <div className={classes['review-details']}>
              <p>
                Its a nice casual denim shirt, however the material ain&apos;t
                much thick for a denim cloth, but considering the price of the
                Shirt, its worth the money, fit is fine.. everything is good,
                except for the length.
              </p>
              <div className={classes['review-meta-info']}>
                <div>
                  <span>{review.userName}</span> |{' '}
                  <span>
                    {new Date(review.timeStamp).toString().substring(4, 15)}
                  </span>
                </div>
                <div className={classes['like-dislike']}>
                  <div>
                    <SvgLikeDislike className={classes['svg-like']} />
                    <span>{review.upVotes}</span>
                  </div>
                  <div>
                    <SvgLikeDislike className={classes['svg-dislike']} />
                    <span>{review.downVotes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className={classes['review-wrapper']}>
          <div
            className={`${classes['rating-box']} ${classes[`user-review-${rating}-star${rating > 1 ? 's' : ''}`]}`}>
            <span>4</span>
            <SvgWhiteStar />
          </div>
          <div className={classes['review-details']}>
            <p>
              Its a nice casual denim shirt, however the material ain&apos;t
              much thick for a denim cloth, but considering the price of the
              Shirt, its worth the money, fit is fine.. everything is good,
              except for the length.
            </p>
            <div className={classes['review-meta-info']}>
              <div>
                <span>Manisha</span> | <span>15 Apr 2014</span>
              </div>
              <div className={classes['like-dislike']}>
                <div>
                  <SvgLikeDislike className={classes['svg-like']} />
                  <span>0</span>
                </div>
                <div>
                  <SvgLikeDislike className={classes['svg-dislike']} />
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes['review-wrapper']}>
          <div
            className={`${classes['rating-box']} ${classes[`user-review-${rating}-star${rating > 1 ? 's' : ''}`]}`}>
            <span>4</span>
            <SvgWhiteStar />
          </div>
          <div className={classes['review-details']}>
            <p>
              Its a nice casual denim shirt, however the material ain&apos;t
              much thick for a denim cloth, but considering the price of the
              Shirt, its worth the money, fit is fine.. everything is good,
              except for the length.
            </p>
            <div className={classes['review-meta-info']}>
              <div>
                <span>Manisha</span> | <span>15 Apr 2014</span>
              </div>
              <div className={classes['like-dislike']}>
                <div>
                  <SvgLikeDislike className={classes['svg-like']} />
                  <span>0</span>
                </div>
                <div>
                  <SvgLikeDislike className={classes['svg-dislike']} />
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className={classes['view-all-reviews']}>View all 13 Reviews</div>
      <div className={classes['seller-info']}>
        <p>
          <span>Product code: </span>
          <span className={classes['product-code']}>13735144</span>
        </p>
        <p>
          <span>Seller: </span>
          <span className={classes['product-seller-name']}>
            Bloom Exim Private Limited
          </span>
        </p>
      </div>
    </div>
  );
};

export default CustomersReviews;
