import styles from './Pipeline.module.scss';
import { Job } from './job/Job';

export const Pipeline: React.FC = () => {
  return (
    <div className={styles.pipeline}>
      <Job title="compile" />
      <span className={styles.line}></span>
      <Job title="build" />
      <span className={styles.line}></span>
      <Job
        title="deploy"
        type="managed"
      />
    </div>
  );
};
