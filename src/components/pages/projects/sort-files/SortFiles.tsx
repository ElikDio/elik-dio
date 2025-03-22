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
            src={'/photos/demos/sortfiles.png'}
            alt={'SortFiles'}
          />
        </a>
        <Goals
          goals={[
            'Предоставить пользователям удобную платформу для скачивания Sort Files',
            'Рассказать о возможностях приложения и его преимущества',
            'Обеспечить поддержку пользователей через раздел вопросов и предложений',
          ]}
          withIcons={false}
        />
      </div>
    </div>
  );
};
