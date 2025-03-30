import { Goals } from 'src/components/widgets/goals/Goals';
import { ProjectsConfig } from '../../../../utils/projects';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './SmartDriving.module.scss';

export const SmartDriving: React.FC = () => {
  return (
    <div className={styles.smartDriving}>
      <ProjectsHeader project={ProjectsConfig.SmartDriving} />
      <div className={styles.main}>
        <a
          href={ProjectsConfig.SmartDriving.demoLink}
          target="_blank"
          rel="noreferrer"
          className={styles.demo}
        >
          <img
            src={ProjectsConfig.SmartDriving.demoImage}
            alt={ProjectsConfig.SmartDriving.title}
          />
        </a>

        <div className={styles.right}>
          <Goals
            goals={ProjectsConfig.SmartDriving.goals}
            withIcons={false}
          />
        </div>
      </div>
    </div>
  );
};
