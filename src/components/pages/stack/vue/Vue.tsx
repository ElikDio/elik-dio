import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { Container } from '../../../../components/widgets/container/Container';
import { Goals } from '../../../../components/widgets/goals/Goals';
import { ReactComponent as ITMO } from '../../../../styles/icons/companies/itmo-transparent-back.svg';
import { ReactComponent as CompanyIcon } from '../../../../styles/icons/company.svg';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './Vue.module.scss';

export const Vue: React.FC = () => {
  return (
    <div className={styles.vue}>
      <TechnologyHeader technology={TechnologiesConfig.Vue} />

      <div className={styles.main}>
        <Goals
          goals={[
            'Освоил базовые принципы Vue, включая работу с компонентами и реактивностью.',
            'Настраивал API запросы и обрабатывал ответы',
            'Использовал элементы Bootstrap в собственной дизайн-системе проекта',
            'Работал с модульной сборкой проекта',
          ]}
        />

        <div className={styles.right}>
          <Container
            title="Company"
            icon={CompanyIcon}
          >
            <a
              className={styles.company}
              // href={''}
            >
              <ITMO />
            </a>
          </Container>

          <span className={styles.line}></span>

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.Nuxt,
              TechnologiesConfig.Vuetify,
              TechnologiesConfig.Bootstrap,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
