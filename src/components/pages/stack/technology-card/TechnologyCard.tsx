import { ReactComponent as StarIcon } from '../../../../styles/icons/star.svg';
import { TechnologyData } from '../../../../utils/technologies';
import styles from './TechnologyCard.module.scss';

interface TechnologyCardProps {
  technology: TechnologyData;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  technology,
}) => {
  return (
    <div className={styles.technologyCard}>
      <div className={styles.info}>
        <technology.icon />
        <div className={styles.technologyTitle}>
          <h1>{technology.title}</h1>
          <div className={styles.grade}>
            {new Array(5).fill(0).map((_, index) => (
              <div
                key={index}
                className={styles.star}
                style={
                  index < technology.grade!
                    ? { color: technology.gradeColor }
                    : { color: 'white' }
                }
              >
                <StarIcon />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.additional}>
        {technology.bundleTechnologies &&
          technology.bundleTechnologies.length > 0 &&
          technology.bundleTechnologies.map((AdditionalIcon, index) => (
            <AdditionalIcon />
          ))}
      </div>
    </div>
  );
};
