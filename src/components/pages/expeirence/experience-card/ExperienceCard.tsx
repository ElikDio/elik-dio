import { ReactComponent as ExperienceIcon } from '../../../../styles/icons/experience.svg';
import { ExperienceData } from '../../../../utils/experience';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: ExperienceData;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.title}>
        <h1>{experience.title}</h1>
        <div className={styles.technologies}>
          {experience.bundleTechnologies &&
            experience.bundleTechnologies.length > 0 &&
            experience.bundleTechnologies.map((TechnologyIcon, index) => (
              <TechnologyIcon />
            ))}
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.dates}>
          {experience.dateFrom} - {experience.dateTo}
        </div>
        <div className={styles.position}>
          {experience.position}
          <ExperienceIcon />
        </div>
      </div>
    </div>
  );
};
