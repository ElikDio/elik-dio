import { ReactComponent as StarIcon } from '../../../../styles/icons/star.svg';
import { pluralize } from '../../../../utils/pluralize';
import { TechnologyData } from '../../../../utils/technologies';
import styles from './TechnologyHeader.module.scss';

interface TechnologyHeaderProps {
  technology: TechnologyData;
}

export const TechnologyHeader: React.FC<TechnologyHeaderProps> = ({
  technology,
}) => {
  return (
    <div className={styles.technologyHeader}>
      <div className={styles.title}>
        <div className={styles.info}>
          <technology.icon />
          <div className={styles.technology}>
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
              <p className={styles.hint}>
                * Звезды показывают мою уверенность во владении технологией
              </p>
            </div>
          </div>
        </div>

        <div className={styles.time}>
          {technology.years! > 1 ? (
            <h2>
              {technology.years!}{' '}
              {pluralize(technology.years!, ['год', 'года', 'лет'])}
            </h2>
          ) : (
            <h2>
              {technology.years! * 100}{' '}
              {pluralize(technology.years! * 100, [
                'месяц',
                'месяца',
                'месяцев',
              ])}
            </h2>
          )}
        </div>
      </div>
      <span className={styles.line} />
      <p className={styles.description}>{technology.description}</p>

      <div className={styles.backgroundIcon}>
        {technology.backgroundIcon && <technology.backgroundIcon />}
      </div>
    </div>
  );
};
