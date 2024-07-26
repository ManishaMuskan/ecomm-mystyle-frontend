import CustomersReviews from './CustomersReviews/CustomersReviews';
import Ratings from './Ratings/Ratings';
import WhatCustomersSay from './WhatCustomersSay/WhatCustomersSay';

const RatingsAndReview = ({ data, ratings }) => {
  return (
    <>
      <Ratings ratings={ratings} />
      <WhatCustomersSay questionAndAnswer={data} />
      <CustomersReviews reviewInfo={ratings.reviewInfo} />
    </>
  );
};

export default RatingsAndReview;
