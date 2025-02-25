import { ReactComponent as GoalsIcon } from '../../../styles/icons/goals.svg';
import { Container } from '../container/Container';
import styles from './Goals.module.scss';

interface GoalsProps {
  goals: string[];
}

export const Goals: React.FC<GoalsProps> = ({ goals }) => {
  return (
    <Container
      title={'Goals'}
      icon={GoalsIcon}
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
