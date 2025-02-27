import { ReactComponent as GoalsIcon } from '../../../styles/icons/goals.svg';
import { Container } from '../container/Container';
import styles from './Goals.module.scss';

interface GoalsProps {
  goals: string[];
  withIcons?: boolean;
}

export const Goals: React.FC<GoalsProps> = ({ goals, withIcons = true }) => {
  return (
    <Container
      title={withIcons ? 'Goals' : undefined}
      icon={withIcons ? GoalsIcon : undefined}
    >
      <div className={styles.goals}>
        {goals &&
          goals.length > 0 &&
          goals.map((goal) => (
            <>
              <p>{goal}</p>
              <span className={styles.line}></span>
            </>
          ))}
      </div>
    </Container>
  );
};
