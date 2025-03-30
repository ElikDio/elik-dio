import { ReactComponent as LeftLines } from '../../../styles/icons/back/left-lines.svg';
import { ReactComponent as RightLines } from '../../../styles/icons/back/right-lines.svg';
import { ReactComponent as RightDownLines } from '../../../styles/icons/back/right-down-lines.svg';
import { Divider } from '../../ui/divider/Divider';
import { Header } from '../../widgets/header/Header';
import styles from './Main.module.scss';

export const Main: React.FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles.lines}>
        <div className={styles.left}>
          <LeftLines />
        </div>
        <div className={styles.right}>
          <RightLines />
        </div>
        <div className={styles.leftDown}>
          <LeftLines />
        </div>
        <div className={styles.rightDown}>
          <RightDownLines />
        </div>
      </div>
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
