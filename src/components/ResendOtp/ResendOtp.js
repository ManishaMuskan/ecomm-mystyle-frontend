import { useEffect, useState, useCallback, useRef } from 'react';
import classes from './ResendOtp.module.css';
import { formatTime } from '../../utils/helpers';
import useToastContext from '../../hooks/useToastContext';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import useAuthContext from '../../hooks/useAuthContext';
import { DEFAULT_RESEND_OTP_TIMER_DURATION } from '../../config/appConstants';

const ResendOtp = ({
  timerDuration = DEFAULT_RESEND_OTP_TIMER_DURATION,
  triggerTimer,
  mobile,
}) => {
  const [isTimerActivated, setIsTimerActivated] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timerDuration);
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
    setRemainingTime(timerDuration);
  }, [timerDuration]);

  const activateTimer = () => {
    setIsTimerActivated(true);
  };

  const deactivateTimer = () => {
    setIsTimerActivated(false);
  };

  const startTimer = useCallback(() => {
    activateTimer();
    clearTimer();
    let seconds = timerDuration;
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
  }, [resetTimer, timerDuration]);

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
