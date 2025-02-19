import clsx from 'clsx';
import { Name } from '../../ui/name/Name';
import { Links } from '../links/Links';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  pageIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  pageTitle: string;
  config: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    index: number;
  }[];
  onTabClick: (index: number) => void;
  activeIndex: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  pageIcon: PageIcon,
  pageTitle,
  config,
  onTabClick,
  activeIndex,
}) => {
  return (
    <section className={styles.sidebar}>
      <Name />
      <Links />
      <div className={styles.title}>
        <PageIcon />
        {pageTitle}
      </div>
      <ul className={styles.tabs}>
        {config &&
          config.length > 0 &&
          config.map((tab, indexKey) => (
            <li
              onClick={() => onTabClick(tab.index)}
              className={clsx(styles.tab, {
                [styles.active]: tab.index === activeIndex,
              })}
              key={indexKey}
            >
              <tab.icon />
              {tab.title}
            </li>
          ))}
      </ul>
    </section>
  );
};
