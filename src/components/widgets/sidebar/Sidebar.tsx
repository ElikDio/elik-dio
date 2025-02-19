import { Name } from '../../ui/name/Name';
import { Links } from '../links/Links';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  pageTitle: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ pageTitle }) => {
  return (
    <section className={styles.sidebar}>
      <Name />
      <Links />
      <div className={styles.title}>
        {pageTitle}
      </div>
    </section>
  );
};
