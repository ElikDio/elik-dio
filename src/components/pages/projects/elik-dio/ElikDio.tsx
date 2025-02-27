import { ReactComponent as FigmaIcon } from '../../../../styles/icons/tab-projects/layouts.svg';
import { ProjectsConfig } from '../../../../utils/projects';
import { Container } from '../../../widgets/container/Container';
import { ProjectsHeader } from '../projects-header/ProjectsHeader';
import styles from './ElikDio.module.scss';

export const ElikDio: React.FC = () => {
  return (
    <div className={styles.elikDio}>
      <ProjectsHeader project={ProjectsConfig.ElikDio} />
      <Container
        title="Design"
        icon={FigmaIcon}
      >
        Some info
      </Container>
    </div>
  );
};
