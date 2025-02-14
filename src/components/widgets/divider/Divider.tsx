import styles from './Divider.module.scss';

interface DividerProps {
  imageSorces: string[];
}

export const Divider: React.FC<DividerProps> = ({ imageSorces }) => {
  return (
    <div className={styles.divider}>
      <div className={styles.images}>
        {imageSorces &&
          imageSorces.length > 0 &&
          [...imageSorces, ...imageSorces].map((imageSource, index) => (
            <div
              className={styles.imageWrapper}
              key={index}
            >
              <img
                src={imageSource}
                alt={`image ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
