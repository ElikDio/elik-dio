import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  title?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  children: ReactNode;
  width?: string;
}

export const Container: React.FC<ContainerProps> = ({
  title,
  icon: Icon,
  children,
  width = '355px',
}) => {
  return (
    <div
      className={styles.container}
      style={{ width: width }}
    >
      {title && Icon && (
        <div className={styles.title}>
          <Icon />
          {title}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
