import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './AnimatedSection.module.scss';

interface AnimatedSectionProps {
  children: ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.4 } },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
}) => {
  return (
    <motion.section
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.section>
  );
};
