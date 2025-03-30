import clsx from 'clsx';
import { ProjectData } from '../../../../utils/projects';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: ProjectData;
  demo: JSX.Element;
  demoCovered?: boolean;
  onCardClick: (index: number) => void;
  activeIndex: number;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  demo,
  demoCovered = true,
  onCardClick,
  activeIndex,
  index,
}) => {
  return (
    <div
      className={clsx(styles.projectCard, {
        [styles.uncovered]: !demoCovered && index === activeIndex,
        [styles.covered]: demoCovered && index === activeIndex,
      })}
      onClick={() => onCardClick(index)}
    >
      <div className={styles.info}>
        <project.icon />
        <div className={styles.projectTitle}>
          <h1>{project.title}</h1>
          <div className={styles.additional}>
            {project.bundleTechnologies &&
              project.bundleTechnologies.length > 0 &&
              project.bundleTechnologies.map((AdditionalIcon, index) => (
                <AdditionalIcon />
              ))}
          </div>
        </div>
      </div>

      {/* {index === activeIndex && ( */}
        <div className={styles.demoInfo}>
          <span className={styles.line}></span>
          <h2>{project.shortDescription}</h2>
          <div className={styles.demo}>{demo}</div>
        </div>
      {/* )} */}
    </div>
  );
};
