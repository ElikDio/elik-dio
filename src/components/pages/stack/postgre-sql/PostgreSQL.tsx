import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { ReactComponent as DatabaseBack } from '../../../../styles/icons/back/db.svg';
import { ReactComponent as BackendBack } from '../../../../styles/icons/back/back.svg';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './PostgreSQL.module.scss';
import { backTechnologies, dbTechnologies } from './config';
import { Table } from './table/Table';

export const PostgreSQL: React.FC = () => {
  return (
    <div className={styles.postgreSQL}>
      <TechnologyHeader technology={TechnologiesConfig.PostgreSQL} />

      <div className={styles.main}>
        <Table
          key={'db_stack'}
          name={'Database'}
          rows={dbTechnologies}
          background={DatabaseBack}
        />

        <Table
          key={'back_stack'}
          name={'Backend'}
          rows={backTechnologies}
          background={BackendBack}
          width={400}
        />

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
