import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SvgAddressTick,
  SvgExchangeOrReturn,
  SvgPayOnDelivery,
  SvgServiceAbility,
} from '../../assets/svgs/SvgIcons';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import SpriteIcon from '../../components/UI/SpriteIcon/SpriteIcon';
import data from '../../seeds/product-men-shirt-denim.json';
import classes from './ProductDetails.module.css';
import RatingsAndReview from './components/ProductDetails/RatingsAndReview';

const product = data.data;
product.title = product.name.slice(product.brand.name.length + 1);
console.log(product);
product.ratings = {
  averageRating: 3.923076923076923,
  totalCount: 78,
  isFastFashion: true,
  ratingInfo: [
    {
      rating: 2,
      count: 4,
    },
    {
      rating: 3,
      count: 7,
    },
    {
      rating: 4,
      count: 10,
    },
    {
      rating: 5,
      count: 45,
    },
    {
      rating: 1,
      count: 12,
    },
  ],
  reviewInfo: {
    reviewsCount: '18',
    reviewsImageCount: '4',
    topReviews: [
      {
        reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
        userName: 'Rahul singh',
        reviewText: '',
        userRating: 4,
        timestamp: '1716089282000',
        upvotes: '1',
        downvotes: '3',
        reviewImages: [
          {
            reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
            imageUrl:
              'https://assets.myntassets.com/assets/images/2024/5/19/0192a57f-5f0c-4a70-8026-9594fc40513c1716089278575-image722.jpg',
            aspectRatio: '4:5',
            resolution: '1080X1350',
          },
          {
            reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
            imageUrl:
              'https://assets.myntassets.com/assets/images/2024/5/19/2dfd24b2-7916-4a69-8c12-d57146fce1141716089278660-image233.jpg',
            aspectRatio: '4:5',
            resolution: '1080X1350',
          },
          {
            reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
            imageUrl:
              'https://assets.myntassets.com/assets/images/2024/5/19/934e1cf2-d795-4def-bfaf-9594984fef6c1716089278608-image151.jpg',
            aspectRatio: '4:5',
            resolution: '1080X1350',
          },
        ],
      },
    ],
    topImageReviews: [
      {
        uidx: null,
        reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
        userName: 'Rahul singh',
        reviewText: '',
        userRating: 4,
        timestamp: '1716089282000',
        upvotes: '1',
        downvotes: '3',
        reviewImages: null,
      },
      {
        reviewId: 'a68a8de1-f481-4e68-88e6-4623769e4206',
        userName: 'rajni',
        reviewText: 'Osm\n',
        userRating: 5,
        timestamp: '1714101022000',
        upvotes: '0',
        downvotes: '0',
        reviewImages: null,
      },
    ],
    topImages: [
      {
        reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
        imageUrl:
          'https://assets.myntassets.com/assets/images/2024/5/19/934e1cf2-d795-4def-bfaf-9594984fef6c1716089278608-image151.jpg',
        aspectRatio: '4:5',
        resolution: '1080X1350',
      },
      {
        reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
        imageUrl:
          'https://assets.myntassets.com/assets/images/2024/5/19/0192a57f-5f0c-4a70-8026-9594fc40513c1716089278575-image722.jpg',
        aspectRatio: '4:5',
        resolution: '1080X1350',
      },
      {
        reviewId: '615af732-09fc-468c-b178-f8bb2d8f5b0c',
        imageUrl:
          'https://assets.myntassets.com/assets/images/2024/5/19/2dfd24b2-7916-4a69-8c12-d57146fce1141716089278660-image233.jpg',
        aspectRatio: '4:5',
        resolution: '1080X1350',
      },
      {
        reviewId: 'a68a8de1-f481-4e68-88e6-4623769e4206',
        imageUrl:
          'https://assets.myntassets.com/assets/images/2024/4/26/99b43f71-9258-4893-915d-4c76546b34c01714101016966-image628.jpg',
        aspectRatio: '9:16',
        resolution: '540X960',
      },
    ],
  },
  aggregatedQuestionsAndAnswers: [
    {
      question: {
        text_for_pdp: 'Fit',
      },
      total_count_for_question: 6,
      answers_with_count: [
        {
          option: {
            text_for_pdp: 'Tight',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'A Little Tight',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Just Right',
          },
          count: 6,
          percentage: 100,
          is_highlighted: true,
        },
        {
          option: {
            text_for_pdp: 'A Little Loose',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Loose',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
      ],
      rating: 5,
    },
    {
      question: {
        text_for_pdp: 'Length',
      },
      total_count_for_question: 6,
      answers_with_count: [
        {
          option: {
            text_for_pdp: 'Short',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'A Little Short',
          },
          count: 1,
          percentage: 17,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Just Right',
          },
          count: 4,
          percentage: 67,
          is_highlighted: true,
        },
        {
          option: {
            text_for_pdp: 'A Little Long',
          },
          count: 1,
          percentage: 16,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Long',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
      ],
      rating: 3.68,
    },
  ],
  isVirtualBundle: false,
};

const p = {
  data: [
    {
      question: {
        text_for_pdp: 'Fit',
      },
      total_count_for_question: 6,
      answers_with_count: [
        {
          option: {
            text_for_pdp: 'Tight',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'A Little Tight',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Just Right',
          },
          count: 6,
          percentage: 100,
          is_highlighted: true,
        },
        {
          option: {
            text_for_pdp: 'A Little Loose',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Loose',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
      ],
      rating: 5,
    },
    {
      question: {
        text_for_pdp: 'Length',
      },
      total_count_for_question: 6,
      answers_with_count: [
        {
          option: {
            text_for_pdp: 'Short',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'A Little Short',
          },
          count: 1,
          percentage: 17,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Just Right',
          },
          count: 4,
          percentage: 67,
          is_highlighted: true,
        },
        {
          option: {
            text_for_pdp: 'A Little Long',
          },
          count: 1,
          percentage: 16,
          is_highlighted: false,
        },
        {
          option: {
            text_for_pdp: 'Long',
          },
          count: 0,
          percentage: 0,
          is_highlighted: false,
        },
      ],
      rating: 3.68,
    },
  ],
  inPdp: true,
  showRating: [
    {
      rating: 5,
      count: 45,
    },
    {
      rating: 1,
      count: 12,
    },
    {
      rating: 2,
      count: 4,
    },
    {
      rating: 3,
      count: 7,
    },
    {
      rating: 4,
      count: 10,
    },
  ],
};

const discountPercentage = (mrp, sp) => Math.floor(((mrp - sp) / mrp) * 100);

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);

  const handleSizeChange = (index) => setSelectedSize(index);
  const handleWishlistChange = () => setWishlisted((prev) => !prev);

  return (
    <div className={classes['product-details-container']}>
      <BreadCrumbs />
      <div className={classes['details-wrapper']}>
        <div className={classes['product-images']}>image grid</div>
        <div className={classes['Product-specification']}>
          <h1 className={classes['product-brand']}>{product.brand.name}</h1>
          <p className={classes['product-title']}>{product.title}</p>

          {product.ratings.averageRating && (
            <div className={classes['product-ratings-box']}>
              <div className={classes['product-ratings']}>
                <span>
                  {Math.round(product.ratings.averageRating * 10) / 10}
                </span>
                <SpriteIcon
                  className={classes['sprites-green-solid-star-icon']}
                />
                <span className={classes['product-ratings-count']}>
                  {product.ratings.totalCount} Ratings
                </span>
              </div>
            </div>
          )}

          <p className={classes['product-price-box']}>
            <span className={classes['product-price-discounted']}>
              ₹{product.price.discounted}
            </span>
            <span className={classes['product-price-mrp']}>
              <s>MRP ₹{product.price.mrp}</s>
            </span>
            <span className={classes['product-price-discountText']}>
              (
              {`${discountPercentage(
                product.price.mrp,
                product.price.discounted
              )}% OFF`}
              )
            </span>
            <span className={classes['product-vat-info']}>
              inclusive of all taxes
            </span>
          </p>

          {product.colours && (
            <div className={classes['product-colors']}>
              <h4 className={classes['colors-heading']}>More colors</h4>
              <ul>
                {product.colours.map((clr) => (
                  <li key={clr.label} title={clr.label}>
                    <Link to="/#">
                      <img
                        src={clr.image}
                        alt={clr.label}
                        className={classes['colors-image']}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={classes['product-sizes']}>
            <p className={classes['sizes-heading']}>Select Size</p>
            <ul>
              {product.sizes.map((s, index) => (
                <li key={s.label} className={classes['product-size']}>
                  <button
                    type="button"
                    onClick={() => handleSizeChange(index)}
                    className={
                      selectedSize === index
                        ? classes['product-size-size-button-selected']
                        : ''
                    }>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes['product-actions']}>
            <button type="button" className={classes['add-to-cart']}>
              <SpriteIcon className={classes['sprites-white-bag-icon']} />
              Add to cart
            </button>
            <button
              type="button"
              className={`${classes['add-to-wishlist']} ${wishlisted ? classes['add-to-wishlist-selected'] : ''}`}
              onClick={handleWishlistChange}>
              <SpriteIcon
                className={`${classes['sprites-not-Wishlisted-icon']} ${wishlisted ? classes['sprites-wishlisted-icon'] : ''}`}
              />
              wishlist
            </button>
          </div>

          <div className={classes['delivery-options']}>
            <h4>
              Delivery Options
              <SpriteIcon className={classes['sprite-delivery-option-icon']} />
            </h4>
            <div className={classes['address-box']}>
              <span className={classes['address-text']}>
                <span>829134 (Manisha)</span>
                <SvgAddressTick className={classes['address-tick']} />
              </span>
              <span className={classes['address-button']}>CHANGE</span>
            </div>
            <ul className={classes['pincode-serviceability-list']}>
              <li>
                <SvgServiceAbility
                  className={classes['pincode-service-ability-icon']}
                />
                <h4>Get it by Fri, Jul 12</h4>
              </li>
              <li>
                <SvgPayOnDelivery
                  className={classes['pincode-service-ability-icon']}
                />
                <h4>Pay on delivery available</h4>
              </li>
              <li>
                <SvgExchangeOrReturn
                  className={classes['pincode-service-ability-icon']}
                />
                <h4>Easy 30 days return &amp; exchange available</h4>
                {/* TODO: Design More Info side view box */}
                {/* <span className="pincode-serviceabilityViewMore">
                  MORE INFO
                  <SvgMoreInfo className={classes['pincode-right-arrow']} />
                </span> */}
              </li>
            </ul>
            <p>100% Original Products</p>
          </div>

          {/* TODO: Design product description part */}
          {/* <div className={classes['product-description']}>
            product description
          </div> */}
          <div className={classes['detailed-reviews-rating-container']}>
            <div className={classes['detailed-rating-container']}>
              <h4 className={classes['index-header']}>
                Ratings
                <SpriteIcon
                  className={classes['sprites-product-ratings-icon']}
                />
              </h4>
              <div className={classes['ratings-container']}>
                <div className={classes['average-rating-container']}>
                  <div className={classes['average-rating']}>
                    <span>
                      {Math.round(product.ratings.averageRating * 10) / 10}
                    </span>
                    <SpriteIcon
                      className={classes['sprites-good-ratings-icon']}
                    />
                  </div>
                  <div className={classes['verified-buyers-count']}>
                    {product.ratings.totalCount} Verified Buyers
                  </div>
                </div>
                <div className={classes['ratings-bar-container']}>
                  {product.ratings.ratingInfo
                    .sort((a, b) => (a.rating > b.rating ? -1 : 1))
                    .map((r) => (
                      <div
                        key={r.rating}
                        className={classes['rating-bar-wrapper']}>
                        <div className={classes['index-rating']}>
                          <span className={classes['rating-label']}>
                            {r.rating}
                          </span>
                          <SpriteIcon
                            className={
                              classes['sprites-product-ratings-gray-icon']
                            }
                          />
                        </div>
                        <progress
                          min="0"
                          max="70"
                          value={r.count}
                          data-rating={r.rating}
                        />
                        <div className={classes['rating-count']}>{r.count}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="ugc-ugcContainer ugc-inPdp ugc-showRating">
              <div>
                <RatingsAndReview data={p.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
