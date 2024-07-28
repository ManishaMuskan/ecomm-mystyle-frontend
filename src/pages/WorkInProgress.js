import { SvgWorkInProgress } from '../assets/svgs/SvgIcons';
import classes from './WorkInProgress.module.css';

const WorkInProgress = () => {
  return (
    <div className={classes['work-in-progress-container']}>
      <div className={classes['wip-box']}>
        <SvgWorkInProgress />
        <h4>Work is in progress</h4>
        <p>
          This is a demo project to showcase my skills for the interview. It
          does not include less essential pages but can be enhanced later if
          needed.
        </p>
      </div>
    </div>
  );
};

export default WorkInProgress;
