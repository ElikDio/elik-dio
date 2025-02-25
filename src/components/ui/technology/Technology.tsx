import { TechnologyData } from '../../../utils/technologies';
import styles from './Technology.module.scss';

interface TechnologyProps {
  technology: TechnologyData;
}

export const Technology: React.FC<TechnologyProps> = ({ technology }) => {
  return (
    <div className={styles.technology}>
      <span></span>
      <div className={styles.title}>
        <h1>{technology.title}</h1>
      </div>
      <technology.icon />
    </div>
  );
};
