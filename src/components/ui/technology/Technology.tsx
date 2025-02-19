import styles from './Technology.module.scss';

interface TechnologyProps {
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export const Technology: React.FC<TechnologyProps> = ({
  logo: Logo,
  title,
}) => {
  return (
    <div className={styles.technology}>
      <span></span>
      <h1>{title}</h1>
      <Logo />
    </div>
  );
};
