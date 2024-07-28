import { SvgDoubleStar } from '../../../../../assets/svgs/SvgIcons';
import AggregatedQuesAns from './AggregatedQuesAns';
import classes from './WhatCustomersSay.module.css';

const WhatCustomersSay = ({
  questionAndAnswer,
  showOnlyHighlighted = true,
}) => {
  return (
    <>
      <h4 className={classes['index-header']}>
        What Customers Said
        <SvgDoubleStar className={classes['svg-double-star']} />
      </h4>
      {questionAndAnswer.map((qAndA) => {
        return (
          <AggregatedQuesAns
            key={qAndA.question.text_for_pdp}
            caption={qAndA.question.text_for_pdp}
            answers={[...qAndA.answers_with_count]}
            showOnlyHighlighted={showOnlyHighlighted}
          />
        );
      })}
      <div className={classes['view-details']}>View Details</div>
    </>
  );
};

export default WhatCustomersSay;
