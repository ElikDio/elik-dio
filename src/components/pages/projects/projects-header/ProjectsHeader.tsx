import { ReactComponent as GitHubIcon } from '../../../../styles/icons/github.svg';
import { ProjectData } from '../../../../utils/projects';
import styles from './ProjectsHeader.module.scss';

interface ProjectsHeaderProps {
  project: ProjectData;
}

export const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ project }) => {
  return (
    <div className={styles.projectsHeader}>
      <div className={styles.title}>
        <div className={styles.project}>
          <h1>{project.title}</h1>
          {project.gitHubLink && (
            <a
              className={styles.github}
              href={project.gitHubLink}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
        <div className={styles.technologies}>
          {project.bundleTechnologies &&
            project.bundleTechnologies.length > 0 &&
            project.bundleTechnologies.map((_technologyIcon, index) => (
              <_technologyIcon key={index} />
            ))}
        </div>
      </div>
      <span className={styles.line} />
      <p className={styles.description}>{project.shortDescription}</p>

      <div className={styles.backgroundIcon}>
        {project.backgroundIcon && <project.backgroundIcon />}
      </div>
    </div>
  );
};
