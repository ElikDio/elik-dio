import { AdditionalTechnologies } from '../../../../components/widgets/additional-technologies/AdditionalTechnologies';
import { Container } from '../../../../components/widgets/container/Container';
import { Goals } from '../../../../components/widgets/goals/Goals';
import { ReactComponent as LeetCode } from '../../../../styles/icons/companies/leetcode.svg';
import { ReactComponent as GitHubIcon } from '../../../../styles/icons/github.svg';
import { ReactComponent as LinksIcon } from '../../../../styles/icons/links.svg';
import { TechnologiesConfig } from '../../../../utils/technologies';
import { TechnologyHeader } from '../technology-header/TechnologyHeader';
import styles from './TypeScript.module.scss';

export const TypeScript: React.FC = () => {
  return (
    <div className={styles.typeScript}>
      <TechnologyHeader technology={TechnologiesConfig.TypeScript} />

      <div className={styles.main}>
        <Goals
          goals={[
            'Реализовывал строгую типизацию',
            'Описывал схемы ответов и запросов',
            'Проектировал интерфейсы и Generics',
            'Работал с популярными библиотеками',
            'Рефакторил проекты из JavaScript в TypeScript',
          ]}
        />

        <div className={styles.right}>
          <Container
            title="Links"
            icon={LinksIcon}
          >
            <div className={styles.links}>
              <a
                className={styles.github}
                href={''}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={styles.leetCode}
                href={''}
                target="_blank"
                rel="noreferrer"
              >
                <LeetCode />
              </a>
            </div>
          </Container>

          <span className={styles.line}></span>

          <AdditionalTechnologies
            technologies={[
              TechnologiesConfig.JavaScript,
              TechnologiesConfig.Jest,
              TechnologiesConfig.Eslint,
              TechnologiesConfig.Axios,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
