import { Sidebar } from 'src/components/widgets/sidebar/Sidebar';
import { ExperienceConfig } from 'src/utils/experience';
import { ReactComponent as ExperienceIcon } from '../../../styles/icons/experience.svg';
import { ReactComponent as JobIcon } from '../../../styles/icons/job.svg';
import { ReactComponent as TGIcon } from '../../../styles/icons/tg.svg';
import { Companies } from '../../widgets/companies/Companies';
import styles from './Experience.module.scss';
import { ExperienceItem } from './experience-item/ExperienceItem';

export const Experience: React.FC = () => {
  return (
    <section className={styles.expeirence}>
      <Sidebar
        pageIcon={ExperienceIcon}
        pageTitle={'Experience'}
        onTabClick={() => {}}
        activeIndex={0}
      />
      <div className={styles.jobs}>
        <span className={styles.line}></span>
        <div className={styles.timeline}>
          <span className={styles.job}>
            <JobIcon />
          </span>
          <span className={styles.job}>
            <JobIcon />
          </span>
          <span className={styles.job}>
            <JobIcon />
          </span>
          <span className={styles.job}>
            <JobIcon />
          </span>
        </div>
        <div className={styles.expeirenceItems}>
          <ExperienceItem experience={ExperienceConfig.Freelance} />
          <ExperienceItem experience={ExperienceConfig.ITMO} />
          <ExperienceItem experience={ExperienceConfig.ECOMExpert} />
          <ExperienceItem experience={ExperienceConfig.Profilance} />
        </div>
      </div>
      <Companies />
    </section>
  );
};
