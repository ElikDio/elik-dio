import { Container } from 'src/components/widgets/container/Container';
import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './Docker.module.scss';
import { goals } from './config';
import { Pipeline } from './pipeline/Pipeline';
import { Job } from './pipeline/job/Job';
import { Terminal } from './terminal/Terminal';

export const Docker: React.FC = () => {
  return (
    <div className={styles.docker}>
      <TechnologyHeader technology={TechnologiesConfig.Docker} />

      <div className={styles.main}>
        <div className={styles.upper}>
          <Terminal rows={goals} />

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.Gitlab,
              TechnologiesConfig.YandexCloud,
              TechnologiesConfig.Nginx,
            ]}
          />
        </div>
        <div className={styles.footer}>
          <Container width="650px">
            <div className={styles.pipeline}>
              <h3>
                Настраивал пайплайны в GitLab CI/CD для автоматического сборки,
                тестирования и деплоя приложений
              </h3>
              <Pipeline />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
