import { Name } from 'src/components/ui/name/Name';
import { Links } from '../links/Links';
import styles from './HeaderMobile.module.scss';

interface HeaderMobileProps {
  pageIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  pageTitle: string;
  backgroundIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  pageIcon: PageIcon,
  pageTitle,
  backgroundIcon: BackgroundIcon,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Name />
        <div className={styles.title}>
          <PageIcon />
          {pageTitle}
        </div>
      </div>
      <Links />
      {BackgroundIcon && (
        <div className={styles.backgroundIcon}>
          <BackgroundIcon />
        </div>
      )}
    </div>
  );
};
