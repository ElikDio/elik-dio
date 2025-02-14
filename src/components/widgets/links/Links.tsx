import React from 'react';
import { ReactComponent as Github } from '../../../styles/icons/github.svg';
import { ReactComponent as HH } from '../../../styles/icons/hh.svg';
import { ReactComponent as Tg } from '../../../styles/icons/tg.svg';
import styles from './Links.module.scss';

export const Links: React.FC = () => {
  return (
    <div className={styles.links}>
      <a
        className={styles.link}
        href="https://t.me/elik_id"
        target="_blank"
        rel="noreferrer"
      >
        <Tg />
      </a>
      <a
        className={styles.link}
        href="https://github.com/ElikDio"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        className={styles.link}
        href="https://spb.hh.ru/resume/c4c9fb11ff0d2dabd00039ed1f6974424d7178"
        target="_blank"
        rel="noreferrer"
      >
        <HH />
      </a>
    </div>
  );
};
