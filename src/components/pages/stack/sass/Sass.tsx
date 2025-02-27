import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { Goals } from '../../../../components/widgets/goals/Goals';
import { ProjectsConfig } from '../../../../utils/projects';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { ProjectsDemo } from '../../../widgets/projects-demo/ProjectsDemo';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './Sass.module.scss';

export const Sass: React.FC = () => {
  return (
    <div className={styles.sass}>
      <TechnologyHeader technology={TechnologiesConfig.Sass} />

      <div className={styles.main}>
        <Goals
          goals={[
            'Активно использовал SCSS Modules',
            'Внедрял миксины и переменные',
            'Поддерживал адаптивную вёрстку',
            'Создавал глобальные дизайн-системы',
            'Обеспечивал изолированность и читаемость',
          ]}
        />

        <div className={styles.right}>
          <ProjectsDemo
            projects={[
              ProjectsConfig.ElikDio,
              ProjectsConfig.SmartDriving,
            ]}
          />

          <span className={styles.line}></span>

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.CSS,
              TechnologiesConfig.Bootstrap,
              TechnologiesConfig.Tailwind,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
