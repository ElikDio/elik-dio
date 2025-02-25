import { ProjectsConfig } from '../../../../utils/projects';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './SortFiles.module.scss';

export const SortFiles: React.FC = () => {
  return (
    <div className={styles.sortFiles}>
      <ProjectsHeader project={ProjectsConfig.SortFiles} />
    </div>
  );
};
