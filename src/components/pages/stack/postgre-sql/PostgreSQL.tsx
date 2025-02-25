import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './PostgreSQL.module.scss';

export const PostgreSQL: React.FC = () => {
  return (
    <div className={styles.postgreSQL}>
      <TechnologyHeader technology={TechnologiesConfig.PostgreSQL} />

      <div className={styles.main}>

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.Mongo,
              TechnologiesConfig.Java,
              TechnologiesConfig.NodeJS,
              TechnologiesConfig.Oracle,
            ]}
          />
      </div>
    </div>
  );
};
