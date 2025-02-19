import { ReactComponent as ElikDio } from '../../../styles/icons/elikdio.svg';
import styles from './Name.module.scss';

export const Name: React.FC = () => {
  return (
    <div className={styles.name}>
      <ElikDio />
      <h1>Elisey Terskiy</h1>
    </div>
  );
};
