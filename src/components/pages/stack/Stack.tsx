import { useState } from 'react';
import { ReactComponent as StackIcon } from '../../../styles/icons/stack.svg';
import { ReactComponent as DockerIcon } from '../../../styles/icons/tab-technologies/docker.svg';
import { ReactComponent as PgIcon } from '../../../styles/icons/tab-technologies/pg.svg';
import { ReactComponent as ReactIcon } from '../../../styles/icons/tab-technologies/react.svg';
import { ReactComponent as SassIcon } from '../../../styles/icons/tab-technologies/sass.svg';
import { ReactComponent as TSIcon } from '../../../styles/icons/tab-technologies/typescript.svg';
import { ReactComponent as VueIcon } from '../../../styles/icons/tab-technologies/vue.svg';
import { Sidebar } from '../../widgets/sidebar/Sidebar';
import styles from './Stack.module.scss';
import { Docker } from './docker/Docker';
import { PostgreSQL } from './postgre-sql/PostgreSQL';
import { React } from './react/React';
import { Sass } from './sass/Sass';
import { TypeScript } from './typescript/TypeScript';
import { Vue } from './vue/Vue';

export const Stack: React.FC = () => {
  const [technologyIndex, setTechnologyIndex] = useState<number>(5);

  const technologies = [
    <React />,
    <TypeScript />,
    <Sass />,
    <Vue />,
    <PostgreSQL />,
    <Docker />,
  ];

  return (
    <section className={styles.stack}>
      <Sidebar
        pageIcon={StackIcon}
        pageTitle={'Stack'}
        config={[
          { icon: ReactIcon, title: 'React', index: 0 },
          { icon: TSIcon, title: 'TypeScript', index: 1 },
          { icon: SassIcon, title: 'Sass/Scss', index: 2 },
          { icon: VueIcon, title: 'Vue', index: 3 },
          { icon: PgIcon, title: 'PostgreSQL', index: 4 },
          { icon: DockerIcon, title: 'Docker', index: 5 },
        ]}
        onTabClick={setTechnologyIndex}
        activeIndex={technologyIndex}
      />
      <div className={styles.technology}>{technologies[technologyIndex]}</div>
    </section>
  );
};
