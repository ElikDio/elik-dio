import Marquee from 'react-fast-marquee';
import styles from './Companies.module.scss';
import { companiesImagesSources } from './config';

export const Companies: React.FC = () => {
  return (
    <div className={styles.companies}>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
      >
        <div className={styles.images}>
          {[...companiesImagesSources, ...companiesImagesSources].map(
            (imageSource, index) => (
              <div
                key={index}
                className={styles.imageWrapper}
              >
                <img
                  src={imageSource}
                  alt={`company ${index + 1}`}
                  className={styles.image}
                />
              </div>
            )
          )}
        </div>
      </Marquee>
    </div>
  );
};
