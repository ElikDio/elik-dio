import { useScrollToTopOnView } from '../../../utils/useScrollToTopOnView';
import styles from './FullScreenSection.module.scss';

interface FullScreenSectionProps {
  children: React.ReactNode;
}

export const FullScreenSection: React.FC<FullScreenSectionProps> = ({
  children,
}) => {
  const ref = useScrollToTopOnView();

  return (
    <div
      ref={ref}
      className={styles.fullScreenSection}
    >
      {children}
    </div>
  );
};
