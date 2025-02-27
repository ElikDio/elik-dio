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
          href="https://market.smartdriving.io"
          target="_blank"
          rel="noreferrer"
          className={styles.demo}
        >
          <img
            src={'/photos/demos/smartdriving.png'}
            alt={'SmartDriving'}
          />
        </a>
        <Goals
          goals={[
            'Сверстал весь маркетплейс по дизайну в Figma',
            'Использовал модульные стили и вспомогательные библиотеки (например, clsx)',
            'Выносил UI-компоненты и настраивал адаптивность под разные экраны',
            'Выстравивал FSD архитектуру ',
          ]}
          withIcons={false}
        />
      </div>
    </div>
  );
};
