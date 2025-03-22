import clsx from 'clsx';
import { Name } from '../../ui/name/Name';
import { Links } from '../links/Links';
import styles from './Sidebar.module.scss';
import { Tab } from './Tab/Tab';

interface SidebarProps {
  pageIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  pageTitle: string;
  config?: {
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
      <div
        className={clsx(styles.title, {
          [styles.border]: config && config.length,
        })}
      >
        <PageIcon />
        {pageTitle}
      </div>
      <ul className={styles.tabs}>
        {config &&
          config.length > 0 &&
          config.map((tab, indexKey) => (
            <Tab
              key={indexKey}
              onTabClick={onTabClick}
              tabIcon={tab.icon}
              activeIndex={activeIndex}
              index={tab.index}
              title={tab.title}
            />
          ))}
      </ul>
    </section>
  );
};
