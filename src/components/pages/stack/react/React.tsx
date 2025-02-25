import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { Goals } from '../../../../components/widgets/goals/Goals';
import { ProjectsConfig } from '../../../../utils/projects';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { ProjectsDemo } from '../../../widgets/projects-demo/ProjectsDemo';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './React.module.scss';

export const React: React.FC = () => {
  return (
    <div className={styles.react}>
      <TechnologyHeader technology={TechnologiesConfig.React} />

      <div className={styles.main}>
        <Goals
          goals={[
            'Создавал и оптимизировал компоненты',
            'Управлял состояниями с MobX и ReduX',
            'Выстраивал архитектуру с нуля',
            'Работал с серверными API через REST и WS',
            'Повышал скорость работы методов',
          ]}
        />

        <div className={styles.right}>
          <ProjectsDemo
            projects={[
              ProjectsConfig.SortFiles,
              ProjectsConfig.SmartDriving,
              ProjectsConfig.ARG,
            ]}
          />

          <span className={styles.line}></span>

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.Next,
              TechnologiesConfig.MobX,
              TechnologiesConfig.ReduX,
              TechnologiesConfig.WebPack,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
