import { HeaderMobile } from 'src/components/widgets/header-mobile/HeaderMobile';
import { Sidebar } from 'src/components/widgets/sidebar/Sidebar';
import { ExperienceConfig } from 'src/utils/experience';
import { ReactComponent as ExperienceIcon } from '../../../styles/icons/experience.svg';
import { ReactComponent as JobIcon } from '../../../styles/icons/job.svg';
import { Companies } from '../../widgets/companies/Companies';
import styles from './Experience.module.scss';
import { ExperienceCard } from './experience-card/ExperienceCard';
import { ExperienceItem } from './experience-item/ExperienceItem';

export const Experience: React.FC = () => {
  const experienceConfig = [
    ExperienceConfig.ECOMExpert,
    ExperienceConfig.ITMO,
    ExperienceConfig.Profilance,
    ExperienceConfig.Freelance,
  ];

  return (
    <>
      <section className={styles.experience}>
        <Sidebar
          pageIcon={ExperienceIcon}
          pageTitle={'Experience'}
          onTabClick={() => {}}
          activeIndex={0}
        />
        <p className={styles.desktopHint}>
          * Подробнее о моем опыте работы можно узнать нажав на карточку опыта
        </p>
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
          <div className={styles.experienceItems}>
            {experienceConfig.map((expeirenceItem, index) => (
              <ExperienceItem
                key={index}
                experience={expeirenceItem}
              />
            ))}
          </div>
        </div>
        <Companies />
      </section>

      <section className={styles.experienceMobile}>
        <div className={styles.title}>
          <ExperienceIcon />
          Experience
        </div>
        <div className={styles.experienceMobileItems}>
          {experienceConfig.map((expeirenceItem, index) => (
            <ExperienceCard
              key={index}
              experience={expeirenceItem}
            />
          ))}
        </div>
        <p className={styles.hint}>
          * Подробнее о моем опыте работы можно узнать нажав на карточку опыта
        </p>

        <Companies />
      </section>
    </>
  );
};
