import { ProjectsConfig } from '../../../../utils/projects';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './ElikDio.module.scss';

export const ElikDio: React.FC = () => {
  return (
    <div className={styles.elikDio}>
      <ProjectsHeader project={ProjectsConfig.ElikDio} />
    </div>
  );
};
