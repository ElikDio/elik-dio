import { Goals } from 'src/components/widgets/goals/Goals';
import { ProjectsConfig } from '../../../../utils/projects';
import { Carousel } from '../../../widgets/carousel/Carousel';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './ARG.module.scss';

export const ARG: React.FC = () => {
  return (
    <div className={styles.arg} id={ProjectsConfig.ARG.anchorLink}>
      <ProjectsHeader project={ProjectsConfig.ARG} />

      <div className={styles.main}>
        <Carousel images={ProjectsConfig.ARG.demoImages} />
        <div className={styles.right}>
          <Goals
            goals={ProjectsConfig.ARG.goals}
            withIcons={false}
          />
        </div>
      </div>
    </div>
  );
};
