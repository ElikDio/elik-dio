import { Goals } from 'src/components/widgets/goals/Goals';
import { ProjectsConfig } from '../../../../utils/projects';
import { Carousel } from '../../../widgets/carousel/Carousel';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './ARG.module.scss';

export const ARG: React.FC = () => {
  return (
    <div className={styles.arg}>
      <ProjectsHeader project={ProjectsConfig.ARG} />

      <div className={styles.main}>
        <Carousel
          images={[
            '/photos/arg/authorization.png',
            '/photos/arg/main-page.png',
            '/photos/arg/folder.png',
            '/photos/arg/photo.png',
            '/photos/arg/add-file.png',
            '/photos/arg/admin-panel.png',
          ]}
        />
        <Goals
          goals={[
            'Выстраивал архитектуру приложения с упором на масштабируемость',
            'Интегрировал MobX для управления состояниями',
            'Настраивал работу с хранилищем данных, включая IndexedDB, cookies и localStorage',
            'Реализовывал маршрутизацию между разработанными компонентами (Routing)',
          ]}
          withIcons={false}
        />
      </div>
    </div>
  );
};
