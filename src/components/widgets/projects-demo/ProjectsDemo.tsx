import { ReactComponent as ProjectsIcon } from '../../../styles/icons/projects.svg';
import { ProjectData } from '../../../utils/projects';
import { Container } from '../container/Container';
import { Tab } from '../sidebar/Tab/Tab';
import styles from './ProjectsDemo.module.scss';

interface ProjectsDemoProps {
  projects: ProjectData[];
}

export const ProjectsDemo: React.FC<ProjectsDemoProps> = ({ projects }) => {
  return (
    <Container
      title={'Projects'}
      icon={ProjectsIcon}
    >
      <div className={styles.tabs}>
        {projects &&
          projects.length > 0 &&
          projects.map((project, index) => (
            <Tab
              key={index}
              onTabClick={(index: number) => {}}
              tabIcon={project.tabIcon}
              activeIndex={projects.length}
              index={index}
              title={project.title}
              styleVariant="secondary"
            />
          ))}
      </div>
    </Container>
  );
};
