import { Divider } from '../../ui/divider/Divider';
import { Header } from '../../widgets/header/Header';
import styles from './Main.module.scss';

export const Main: React.FC = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.body}>
        <div className={styles.slogan}>
          <h1>BUILDING</h1>
          <h1>THE WEB OF</h1>
          <h1>TOMORROW</h1>
        </div>
        <img
          className={styles.keyboard}
          src="/photos/keyboard.png"
        />
      </div>
      <Divider imageSorces={Array(8).fill('/photos/FRONTEND-DEVELOPER.png')} />
    </section>
  );
};
