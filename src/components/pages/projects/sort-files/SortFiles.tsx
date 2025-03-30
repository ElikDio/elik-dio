import { Goals } from 'src/components/widgets/goals/Goals';
import { ProjectsConfig } from '../../../../utils/projects';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './SortFiles.module.scss';

export const SortFiles: React.FC = () => {
  return (
    <div className={styles.sortFiles}>
      <ProjectsHeader project={ProjectsConfig.SortFiles} />
      <div className={styles.main}>
        <a
          href={ProjectsConfig.SortFiles.demoLink}
          target="_blank"
          rel="noreferrer"
          className={styles.demo}
        >
          <img
            src={ProjectsConfig.SortFiles.demoImage}
            alt={ProjectsConfig.SortFiles.title}
          />
        </a>

        <div className={styles.right}>
          <Goals
            goals={ProjectsConfig.SortFiles.goals}
            withIcons={false}
          />
        </div>
      </div>
    </div>
  );
};
