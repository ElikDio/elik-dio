import { ReactComponent as Controls } from '../../../../../styles/icons/controls.svg';
import styles from './Terminal.module.scss';

interface TerminalProps {
  rows: { name: string; description: string }[];
}

export const Terminal: React.FC<TerminalProps> = ({ rows }) => {
  return (
    <div className={styles.terminal}>
      <Controls />
      <span className={styles.line}></span>
      <div className={styles.goals}>
        {rows.map((row, index) => (
          <div
            className={styles.goal}
            key={index}
          >
            <h1>
              <b>{row.name}@elik-dio</b>:<i>~</i>$
            </h1>
            <p>{row.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
