import { ReactComponent as AxiosIcon } from '../styles/icons/technologies/axios.svg';
import { ReactComponent as CssIcon } from '../styles/icons/technologies/css.svg';
import { ReactComponent as PythonDjangoIcon } from '../styles/icons/technologies/django.svg';
import { ReactComponent as GitIcon } from '../styles/icons/technologies/git.svg';
import { ReactComponent as HTMLIcon } from '../styles/icons/technologies/html.svg';
import { ReactComponent as JSIcon } from '../styles/icons/technologies/javascript.svg';
import { ReactComponent as MobXIcon } from '../styles/icons/technologies/mobx.svg';
import { ReactComponent as PostmanIcon } from '../styles/icons/technologies/postman.svg';
import { ReactComponent as ReactIcon } from '../styles/icons/technologies/react.svg';
import { ReactComponent as SassIcon } from '../styles/icons/technologies/sass.svg';
import { ReactComponent as TypeScriptIcon } from '../styles/icons/technologies/typescript.svg';
import { ReactComponent as WebpackIcon } from '../styles/icons/technologies/webpack.svg';

export const ExperienceConfig = {
  Freelance: {
    title: 'Free-lance.ru',
    dateFrom: 'aug 2022',
    dateTo: 'dec 2022',
    bundleTechnologies: [
      HTMLIcon,
      CssIcon,
      SassIcon,
      JSIcon,
      PostmanIcon,
      PythonDjangoIcon,
    ],
    position: 'Верстальщик',
    goals: [
      'Разработка адаптивной верстки по макетам Figma, создание одностраничных сайтов и лендингов',
      'Использование HTML5 и CSS3 для реализации дизайнов, а также препроцессора Sass',
      'Добавление новых разделов и элементов на страницы, настройка стилей и обеспечение кроссплафторменности',
      'Интеграция API в готовые лендинги, настройка взаимодействия между фронтендом и бэкендом',
    ],
  },
  ITMO: {
    title: 'НИУ ИТМО',
    dateFrom: 'aug 2022',
    dateTo: 'dec 2022',
    bundleTechnologies: [
      ReactIcon,
      TypeScriptIcon,
      MobXIcon,
      AxiosIcon,
      WebpackIcon,
      GitIcon,
    ],
    position: 'Frontend-разработчик',
    goals: [],
  },
  Profilance: {
    title: 'Профиланс',
    dateFrom: 'aug 2022',
    dateTo: 'dec 2022',
    bundleTechnologies: [
      ReactIcon,
      TypeScriptIcon,
      MobXIcon,
      AxiosIcon,
      WebpackIcon,
      GitIcon,
    ],
    position: 'Frontend-разработчик',
    goals: [],
  },
  ECOMExpert: {
    title: 'e-comExpert',
    dateFrom: 'aug 2022',
    dateTo: 'dec 2022',
    bundleTechnologies: [
      ReactIcon,
      TypeScriptIcon,
      MobXIcon,
      AxiosIcon,
      WebpackIcon,
      GitIcon,
    ],
    position: 'Frontend-разработчик',
    goals: [],
  },
};

export interface ExperienceData {
  title: string;
  dateFrom: string;
  dateTo: string;
  bundleTechnologies: React.FC<React.SVGProps<SVGSVGElement>>[];
  position: string;
  goals: string[];
}
