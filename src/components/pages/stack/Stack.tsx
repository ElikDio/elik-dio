import { TechnologiesConfig, TechnologyData } from 'src/utils/technologies';
import { useState } from 'react';
import { ReactComponent as BackgroundStackIcon } from '../../../styles/icons/back-technologies/stack.svg';
import { ReactComponent as StackIcon } from '../../../styles/icons/stack.svg';
import { Sidebar } from '../../widgets/sidebar/Sidebar';
import styles from './Stack.module.scss';
import { Docker } from './docker/Docker';
import { PostgreSQL } from './postgre-sql/PostgreSQL';
import { React } from './react/React';
import { Sass } from './sass/Sass';
import { TechnologyCard } from './technology-card/TechnologyCard';
import { TypeScript } from './typescript/TypeScript';
import { Vue } from './vue/Vue';

export const Stack: React.FC = () => {
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);

  const technologies = [
    <React />,
    <TypeScript />,
    <Sass />,
    <Vue />,
    <PostgreSQL />,
    <Docker />,
  ];
  const technologiesFromConfig: TechnologyData[] = [
    TechnologiesConfig.React,
    TechnologiesConfig.TypeScript,
    TechnologiesConfig.Sass,
    TechnologiesConfig.Vue,
    TechnologiesConfig.PostgreSQL,
    TechnologiesConfig.Docker,
  ];

  return (
    <>
      <section className={styles.stack}>
        <Sidebar
          pageIcon={StackIcon}
          pageTitle={'Stack'}
          config={[
            {
              icon: TechnologiesConfig.React.tabIcon,
              title: 'React',
              index: 0,
            },
            {
              icon: TechnologiesConfig.TypeScript.tabIcon,
              title: 'TypeScript',
              index: 1,
            },
            {
              icon: TechnologiesConfig.Sass.tabIcon,
              title: 'Sass/Scss',
              index: 2,
            },
            { icon: TechnologiesConfig.Vue.tabIcon, title: 'Vue', index: 3 },
            {
              icon: TechnologiesConfig.PostgreSQL.tabIcon,
              title: 'PostgreSQL',
              index: 4,
            },
            {
              icon: TechnologiesConfig.Docker.tabIcon,
              title: 'Docker',
              index: 5,
            },
          ]}
          onTabClick={setTechnologyIndex}
          activeIndex={technologyIndex}
        />
        <div className={styles.technology}>{technologies[technologyIndex]}</div>
      </section>

      <section className={styles.stackMobile}>
        <div className={styles.backgroundIcon}>
          <BackgroundStackIcon />
        </div>
        <div className={styles.title}>
          <StackIcon />
          Stack
        </div>
        <div className={styles.technologies}>
          {technologiesFromConfig.map((technology, index) => (
            <TechnologyCard
              key={index}
              technology={technology}
            />
          ))}
        </div>

        <p className={styles.hint}>
          * Звезды показывают мою уверенность во владении технологией
        </p>
      </section>
    </>
  );
};
