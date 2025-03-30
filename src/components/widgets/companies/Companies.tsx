import styles from './Companies.module.scss';
import { companiesImagesSources } from './config';

export const Companies: React.FC = () => {
  return (
    <div className={styles.companies}>
      <div className={styles.images}>
        {companiesImagesSources &&
          companiesImagesSources.length > 0 &&
          [
            ...companiesImagesSources,
            ...companiesImagesSources,
          ].map((imageSource, index) => (
            <div
              className={styles.imageWrapper}
              key={index}
            >
              <img
                src={imageSource}
                alt={`company ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
