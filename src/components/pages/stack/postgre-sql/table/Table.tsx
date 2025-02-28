import { ReactComponent as KeyIcon } from '../../../../../styles/icons/key.svg';
import styles from './Table.module.scss';

interface TableProps {
  keyId?: string;
  name: string;
  rows: { name: string; description: string }[];
  background?: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: number;
}

export const Table: React.FC<TableProps> = ({
  keyId,
  name,
  rows,
  background: Backround,
  width = 340,
}) => {
  return (
    <div className={styles.table}>
      {keyId && (
        <div className={styles.key}>
          <KeyIcon />
          <h2>id</h2>
          <p>{keyId}</p>
        </div>
      )}
      <div
        className={styles.main}
        style={{ width: `${width}px` }}
      >
        <div className={styles.name}>{name}</div>
        <div className={styles.rows}>
          {rows &&
            rows.length > 0 &&
            rows.map((row, index) => (
              <div
                className={styles.row}
                key={index}
              >
                <div className={styles.data}>
                  <h1>{row.name}</h1>
                  <p style={{ width: `${width - 200}px` }}>{row.description}</p>
                </div>
                {index + 1 < rows.length && (
                  <span className={styles.line}></span>
                )}
              </div>
            ))}
        </div>
        {Backround && <Backround />}
      </div>
    </div>
  );
};
