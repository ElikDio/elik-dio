import { useEffect, useState } from 'react';
import { Carousel } from '../../../components/widgets/carousel/Carousel';
import { HeaderMobile } from '../../../components/widgets/header-mobile/HeaderMobile';
import { Sidebar } from '../../../components/widgets/sidebar/Sidebar';
import { ReactComponent as BackgroundProjectsIcon } from '../../../styles/icons/back-projects/arg.svg';
import { ReactComponent as ProjectsIcon } from '../../../styles/icons/projects.svg';
import { ProjectsConfig } from '../../../utils/projects';
import styles from './Projects.module.scss';
import { ARG } from './arg/ARG';
import { ProjectCard } from './project-card/ProjectCard';
import { SmartDriving } from './smart-driving/SmartDriving';
import { SortFiles } from './sort-files/SortFiles';

export const Projects: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const projects = [<SortFiles />, <SmartDriving />, <ARG />];

  //** Для компонентного вызова */
  // useEffect(() => {
  //   setTimeout(() => {
  //     setProjectIndex(0);
  //   }, 1000);
  // }, []);

  return (
    <>
      <section className={styles.projects}>
        <Sidebar
          pageIcon={ProjectsIcon}
          pageTitle={'Projects'}
          config={[
            {
              icon: ProjectsConfig.SortFiles.tabIcon,
              title: 'SortFiles',
              index: 0,
            },
            {
              icon: ProjectsConfig.SmartDriving.tabIcon,
              title: 'SmartDriving',
              index: 1,
            },
            { icon: ProjectsConfig.ARG.tabIcon, title: 'ARG', index: 2 },
          ]}
          onTabClick={setProjectIndex}
          activeIndex={projectIndex}
        />
        <div className={styles.project}>{projects[projectIndex]}</div>
      </section>

      <section className={styles.projectsMobile}>
        <div className={styles.title}>
          <ProjectsIcon />
          Projects
        </div>
        <div className={styles.backgroundIcon}>
          <BackgroundProjectsIcon />
        </div>
        <div className={styles.projectCards}>
          <ProjectCard
            project={ProjectsConfig.SortFiles}
            demo={
              <a
                href={ProjectsConfig.SortFiles.demoLink}
                target="_blank"
                rel="noreferrer"
                className={styles.sortFilesDemo}
              >
                <img
                  src={ProjectsConfig.SortFiles.demoImage}
                  alt={ProjectsConfig.SortFiles.title}
                />
              </a>
            }
            index={0}
            activeIndex={projectIndex}
            onCardClick={setProjectIndex}
          />
          <ProjectCard
            project={ProjectsConfig.SmartDriving}
            demo={
              <a
                href={ProjectsConfig.SmartDriving.demoLink}
                target="_blank"
                rel="noreferrer"
                className={styles.smartDrivingDemo}
              >
                <img
                  src={ProjectsConfig.SmartDriving.demoImage}
                  alt={ProjectsConfig.SmartDriving.title}
                />
              </a>
            }
            index={1}
            activeIndex={projectIndex}
            onCardClick={setProjectIndex}
          />
          <ProjectCard
            project={ProjectsConfig.ARG}
            demo={<Carousel images={ProjectsConfig.ARG.demoImages} />}
            demoCovered={false}
            index={2}
            activeIndex={projectIndex}
            onCardClick={setProjectIndex}
          />
        </div>
      </section>
    </>
  );
};
