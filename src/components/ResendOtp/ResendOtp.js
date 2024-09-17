import { useEffect, useState, useCallback, useRef } from 'react';
import classes from './ResendOtp.module.css';
import { formatTime } from '../../utils/helpers';
import useToastContext from '../../hooks/useToastContext';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import useAuthContext from '../../hooks/useAuthContext';

const ResendOtp = ({ timerSeconds = 10, triggerTimer, mobile }) => {
  const [isTimerActivated, setIsTimerActivated] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timerSeconds);
  const [loading, setLoading] = useState();
  const { resendOtp } = useAuthContext();
  const { addToast } = useToastContext();
  const timer = useRef();

  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const resetTimer = useCallback(() => {
    setRemainingTime(timerSeconds);
  }, [timerSeconds]);

  const activateTimer = () => {
    setIsTimerActivated(true);
  };

  const deactivateTimer = () => {
    setIsTimerActivated(false);
  };

  const startTimer = useCallback(() => {
    activateTimer();
    clearTimer();
    let seconds = timerSeconds;
    timer.current = setInterval(() => {
      seconds -= 1;
      if (seconds === 0) {
        deactivateTimer();
        resetTimer();
        clearTimer();
      } else {
        setRemainingTime(seconds);
      }
    }, 1000);
  }, [resetTimer, timerSeconds]);

  const handleClick = async () => {
    setLoading(true);
    try {
      await resendOtp(mobile);
      startTimer();
    } catch (error) {
      addToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (triggerTimer) {
      activateTimer();
      startTimer();
    }

    return () => {
      clearTimer();
    };
  }, [startTimer, triggerTimer]);

  return (
    <div className={classes['resend-otp-box']}>
      {loading && <LoadingSpinner />}
      {!isTimerActivated && (
        <button
          type="button"
          className={classes['resend-btn']}
          onClick={handleClick}>
          RESEND OTP
        </button>
      )}

      {isTimerActivated && (
        <div className={classes['resend-time']}>
          <span> Resend OTP in: </span> {formatTime(remainingTime)}
        </div>
      )}
    </div>
  );
};

export default ResendOtp;
