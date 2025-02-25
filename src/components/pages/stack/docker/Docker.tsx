import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './Docker.module.scss';

export const Docker: React.FC = () => {
  return (
    <div className={styles.docker}>
      <TechnologyHeader technology={TechnologiesConfig.Docker} />

      <div className={styles.main}>

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.Gitlab,
              TechnologiesConfig.YandexCloud,
              TechnologiesConfig.Nginx,
            ]}
          />
      </div>
    </div>
  );
};
