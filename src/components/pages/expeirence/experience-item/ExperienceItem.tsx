import { ExperienceData } from 'src/utils/experience';
import { MyLinks } from 'src/utils/links';
import { ReactComponent as ExperienceIcon } from '../../../../styles/icons/experience.svg';
import styles from './ExperienceItem.module.scss';

interface ExperienceItemProps {
  experience: ExperienceData;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
}) => {
  return (
    <a
      className={styles.expeirenceItem}
      href={MyLinks.HH}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.left}>
        <h1>{experience.title}</h1>
        <span className={styles.line}></span>
        <div className={styles.technologies}>
          {experience.bundleTechnologies &&
            experience.bundleTechnologies.length > 0 &&
            experience.bundleTechnologies.map((_technologyIcon, index) => (
              <_technologyIcon key={index} />
            ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.dates}>
          {experience.dateFrom} - {experience.dateTo}
        </div>
        <div className={styles.position}>
          {experience.position}
          <ExperienceIcon />
        </div>
      </div>
    </a>
  );
};
