import { useState } from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleJumpToFirst = () => {
    setCurrentPage(1);
  };

  return (
    <div className={classes['pagination-container']}>
      <button
        className={`${classes['btn-page-one']} ${currentPage === 1 && classes['btn-disabled']}`}
        type="button"
        onClick={handleJumpToFirst}>
        Page 1
      </button>
      <button
        className={`${classes['btn-previous']} ${currentPage === 1 && classes['btn-disabled']}`}
        type="button"
        onClick={handlePrevious}>
        {/* <span className={classes['pagination-arrowLeft']} /> */}
        Previous
      </button>
      <span className={classes['current-page-of-total-page-txt']}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`${classes['btn-next']} ${currentPage === totalPages && classes['btn-disabled']}`}
        type="button"
        onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
