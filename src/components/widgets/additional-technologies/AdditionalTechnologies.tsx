import { Technology } from '../../../components/ui/technology/Technology';
import { ReactComponent as StackIcon } from '../../../styles/icons/stack.svg';
import { TechnologyData } from '../../../utils/technologies';
import { Container } from '../container/Container';
import styles from './AdditionalTechnologies.module.scss';

interface AdditionalTechnologiesProps {
  technologies: TechnologyData[];
}

export const AdditionalTechnologies: React.FC<AdditionalTechnologiesProps> = ({
  technologies,
}) => {
  return (
    <Container
      title={'Additional Stack'}
      icon={StackIcon}
    >
      <div className={styles.technologies}>
        {technologies &&
          technologies.length > 0 &&
          technologies.map((technology, index) => (
            <Technology
              technology={technology}
              key={index}
            />
          ))}
      </div>
    </Container>
  );
};
