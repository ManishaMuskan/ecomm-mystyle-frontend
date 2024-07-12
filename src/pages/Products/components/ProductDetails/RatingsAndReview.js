import WhatCustomersSay from './WhatCustomersSay';

const RatingsAndReview = ({ data }) => {
  return (
    <div>
      <WhatCustomersSay questionAndAnswer={data} />
    </div>
  );
};

export default RatingsAndReview;
