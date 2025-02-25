import { ProjectsConfig } from '../../../../utils/projects';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './ARG.module.scss';

export const ARG: React.FC = () => {
  return (
    <div className={styles.arg}>
      <ProjectsHeader project={ProjectsConfig.ARG} />
    </div>
  );
};
