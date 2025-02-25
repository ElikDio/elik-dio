import clsx from 'clsx';
import styles from './Tab.module.scss';

interface TabProps {
  onTabClick: (index: number) => void;
  tabIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIndex: number;
  index: number;
  title: string;
  styleVariant?: 'primary' | 'secondary';
}

export const Tab: React.FC<TabProps> = ({
  onTabClick,
  tabIcon: TabIcon,
  activeIndex,
  index,
  title,
  styleVariant = 'primary',
}) => {
  return (
    <li
      onClick={() => onTabClick(index)}
      className={clsx(
        styles.tab,
        {
          [styles.active]: index === activeIndex,
        },
        {
          [styles.secondary]: styleVariant === 'secondary',
        }
      )}
    >
      <TabIcon />
      {title}
    </li>
  );
};
