import classes from './AggregatedQuesAns.module.css';

const AggregatedQuesAns = ({ caption, answers, showOnlyHighlighted }) => {
  const modifiedAnswers = answers.map((ans) => ({
    percentage: ans.percentage,
    text: ans.option.text_for_pdp,
    highlighted: ans.is_highlighted,
  }));
  let filteredAnswers = [...modifiedAnswers];
  if (showOnlyHighlighted) {
    filteredAnswers = modifiedAnswers.filter((ans) => ans.highlighted === true);
  }

  return (
    <div
      className={`${classes['answer-wrapper']} ${showOnlyHighlighted ? classes['only-highlighted'] : ''}`}>
      <div>{caption}</div>
      {filteredAnswers.map((ans) => (
        <div key={ans.text}>
          <div className={classes['answer-fill-wrapper']}>
            <div
              className={classes['answer-fill']}
              style={{ width: `${ans.percentage}%` }}
            />
          </div>
          <div
            className={`${classes['answer-caption']} ${ans.highlighted ? classes['answer-caption-highlighted'] : ''}`}>
            {ans.text} ({ans.percentage}%)
          </div>
        </div>
      ))}
    </div>
  );
};

export default AggregatedQuesAns;
