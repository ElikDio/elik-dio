import { useState } from 'react';
import { Sidebar } from '../../../components/widgets/sidebar/Sidebar';
import { ReactComponent as ElikDioIcon } from '../../../styles/icons/elikdio.svg';
import { ReactComponent as ProjectsIcon } from '../../../styles/icons/projects.svg';
import { ReactComponent as ARGIcon } from '../../../styles/icons/tab-projects/arg.svg';
import { ReactComponent as SmartDrivingIcon } from '../../../styles/icons/tab-projects/luv.svg';
import { ReactComponent as SortFilesIcon } from '../../../styles/icons/tab-projects/sort-files.svg';
import styles from './Projects.module.scss';
import { ARG } from './arg/ARG';
import { ElikDio } from './elik-dio/ElikDio';
import { SmartDriving } from './smart-driving/SmartDriving';
import { SortFiles } from './sort-files/SortFiles';

export const Projects: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const projects = [<SortFiles />, <SmartDriving />, <ARG />, <ElikDio />];

  return (
    <section className={styles.projects}>
      <Sidebar
        pageIcon={ProjectsIcon}
        pageTitle={'Projects'}
        config={[
          { icon: SortFilesIcon, title: 'SortFiles', index: 0 },
          { icon: SmartDrivingIcon, title: 'SmartDriving', index: 1 },
          { icon: ARGIcon, title: 'ARG', index: 2 },
          // { icon: ElikDioIcon, title: 'ElikDio', index: 3 },
        ]}
        onTabClick={setProjectIndex}
        activeIndex={projectIndex}
      />
      <div className={styles.project}>{projects[projectIndex]}</div>
    </section>
  );
};
