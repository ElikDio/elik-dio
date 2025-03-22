import React from 'react';
import { ReactComponent as Github } from '../../../styles/icons/github.svg';
import { ReactComponent as HH } from '../../../styles/icons/hh.svg';
import { ReactComponent as Tg } from '../../../styles/icons/tg.svg';
import styles from './Links.module.scss';
import { MyLinks } from 'src/utils/links';

export const Links: React.FC = () => {
  return (
    <div className={styles.links}>
      <a
        className={styles.link}
        href={MyLinks.Telegram}
        target="_blank"
        rel="noreferrer"
      >
        <Tg />
      </a>
      <a
        className={styles.link}
        href={MyLinks.Github}
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        className={styles.link}
        href={MyLinks.HH}
        target="_blank"
        rel="noreferrer"
      >
        <HH />
      </a>
    </div>
  );
};
