import { ProjectsConfig } from '../../../../utils/projects';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './SmartDriving.module.scss';

export const SmartDriving: React.FC = () => {
  return (
    <div className={styles.smartDriving}>
      <ProjectsHeader project={ProjectsConfig.SmartDriving} />
    </div>
  );
};
