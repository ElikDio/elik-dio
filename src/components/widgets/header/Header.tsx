import { Links } from '../links/Links';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Elisey Terskiy</h1>
      <Links />
    </header>
  );
};
