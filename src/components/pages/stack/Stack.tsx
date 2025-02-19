import { useState } from 'react';
import { Technology } from '../../../components/ui/technology/Technology';
import { ReactComponent as StackIcon } from '../../../styles/icons/stack.svg';
import { ReactComponent as DockerIcon } from '../../../styles/icons/tab-technologies/docker.svg';
import { ReactComponent as HTMLIcon } from '../../../styles/icons/tab-technologies/html.svg';
import { ReactComponent as PgIcon } from '../../../styles/icons/tab-technologies/pg.svg';
import { ReactComponent as ReactIcon } from '../../../styles/icons/tab-technologies/react.svg';
import { ReactComponent as SassIcon } from '../../../styles/icons/tab-technologies/sass.svg';
import { ReactComponent as TSIcon } from '../../../styles/icons/tab-technologies/typescript.svg';
import { ReactComponent as VueIcon } from '../../../styles/icons/tab-technologies/vue.svg';
import { Sidebar } from '../../widgets/sidebar/Sidebar';

export const Stack: React.FC = () => {
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);

  const technologies = ['React', 'TypeScript'];

  return (
    <section>
      <Sidebar
        pageIcon={StackIcon}
        pageTitle={'Stack'}
        config={[
          { icon: ReactIcon, title: 'React', index: 0 },
          { icon: TSIcon, title: 'TypeScript', index: 1 },
          { icon: SassIcon, title: 'Sass/Scss', index: 2 },
          { icon: HTMLIcon, title: 'HTML', index: 3 },
          { icon: VueIcon, title: 'Vue', index: 4 },
          { icon: PgIcon, title: 'PostgreSQL', index: 5 },
          { icon: DockerIcon, title: 'Docker', index: 6 },
        ]}
        onTabClick={setTechnologyIndex}
        activeIndex={technologyIndex}
      />
    </section>
  );
};
