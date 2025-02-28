import { ReactComponent as ManagedJob } from '../../../../../../styles/icons/back/job-managed.svg';
import { ReactComponent as SuccessJob } from '../../../../../../styles/icons/back/job-success.svg';
import styles from './Job.module.scss';

interface JobProps {
  type?: 'success' | 'managed';
  title: string;
}

export const Job: React.FC<JobProps> = ({ type = 'success', title }) => {
  return (
    <div className={styles.job}>
      <h1>{title}</h1>
      {type === 'success' ? <SuccessJob /> : <ManagedJob />}
    </div>
  );
};
