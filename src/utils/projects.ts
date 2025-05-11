import { ReactComponent as ARGBackIcon } from '../styles/icons/back-projects/arg.svg';
import { ReactComponent as ElikDioBackIcon } from '../styles/icons/back-projects/elik-dio.svg';
import { ReactComponent as GPNBackIcon } from '../styles/icons/back-projects/gpn.svg';
import { ReactComponent as LayoutsBackIcon } from '../styles/icons/back-projects/layouts.svg';
import { ReactComponent as SmartDrivingBackIcon } from '../styles/icons/back-projects/luv.svg';
import { ReactComponent as SortFilesBackIcon } from '../styles/icons/back-projects/sort-files.svg';
import { ReactComponent as ElikDioTabIcon } from '../styles/icons/elikdio.svg';
import { ReactComponent as ARGIcon } from '../styles/icons/projects/arg-border.svg';
import { ReactComponent as SmartDrivingIcon } from '../styles/icons/projects/smartdriving-border.svg';
import { ReactComponent as SortFilesIcon } from '../styles/icons/projects/sort-files-border.svg';
import { ReactComponent as ARGTabIcon } from '../styles/icons/tab-projects/arg.svg';
import { ReactComponent as GPNTabIcon } from '../styles/icons/tab-projects/gpn.svg';
import { ReactComponent as LayoutsTabIcon } from '../styles/icons/tab-projects/layouts.svg';
import { ReactComponent as SmartDrivingTabIcon } from '../styles/icons/tab-projects/luv.svg';
import { ReactComponent as SortFilesTabIcon } from '../styles/icons/tab-projects/sort-files.svg';
import { TechnologiesConfig } from './technologies';

export const ProjectsConfig = {
  SortFiles: {
    icon: SortFilesIcon,
    tabIcon: SortFilesTabIcon,
    title: 'SortFiles',
    demoImage: '/photos/demos/sortfiles.png',
    demoLink: 'https://sort-files.ru',
    bundleTechnologies: [
      TechnologiesConfig.React.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
    ],
    goals: [
      'Предоставить пользователям удобную платформу для скачивания Sort Files',
      'Рассказать о возможностях приложения и его преимущества',
      'Обеспечить поддержку пользователей через раздел вопросов и предложений',
      'Рассказать о возможностях приложения и его преимущества',
    ],
    description: `Проект создан для удобного распространения приложения Sort Files. Сайт позволяет быстро скачать программу, ознакомиться с её возможностями и оставить обратную связь.`,
    shortDescription: `Проект для удобного распространения приложения Sort Files`,
    gitHubLink: 'https://github.com/ElikDio/sort-files-website',
    anchorLink: 'sortfiles',
    backgroundIcon: SortFilesBackIcon,
  },
  SmartDriving: {
    icon: SmartDrivingIcon,
    tabIcon: SmartDrivingTabIcon,
    title: 'SmartDriving',
    demoImage: '/photos/demos/smartdriving.png',
    demoLink: 'https://smartdriving-marketplace-demo.vercel.app/',
    bundleTechnologies: [
      TechnologiesConfig.Next.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
      TechnologiesConfig.ReduX.icon,
      TechnologiesConfig.WebPack.icon,
    ],
    goals: [
      'Сверстал весь маркетплейс по дизайну в Figma',
      'Использовал модульные стили и вспомогательные библиотеки (например, clsx)',
      'Выносил UI-компоненты и настраивал адаптивность под разные экраны',
      'Выстравивал FSD архитектуру ',
    ],
    description: `Маркетплейс, созданный для продажи продуктов компании ЛУВ. В рамках проекта я выполнял комплексную работу по фронтенду: верстка и api`,
    shortDescription: `Маркетплейс, созданный для продажи продуктов компании ЛУВ`,
    // gitHubLink: 'https://github.com/ElikDio/sort-files-website',
    anchorLink: 'smartdriving',
    backgroundIcon: SmartDrivingBackIcon,
  },
  ARG: {
    icon: ARGIcon,
    tabIcon: ARGTabIcon,
    title: 'ARG',
    bundleTechnologies: [
      TechnologiesConfig.React.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
      TechnologiesConfig.Router.icon,
      TechnologiesConfig.MobX.icon,
    ],
    goals: [
      'Выстраивал архитектуру приложения с упором на масштабируемость',
      'Интегрировал MobX для управления состояниями',
      'Настраивал работу с хранилищем данных, включая IndexedDB, cookies и localStorage',
      'Реализовывал маршрутизацию между разработанными компонентами (Routing)',
    ],
    description:
      'Проект по автоматизации составления отчета судебного эксперта',
    shortDescription: `Проект по автоматизации составления отчета судебного эксперта`,
    demoImages: [
      '/photos/arg/authorization.png',
      '/photos/arg/main-page.png',
      '/photos/arg/folder.png',
      '/photos/arg/photo.png',
      '/photos/arg/add-file.png',
      '/photos/arg/admin-panel.png',
    ],
    gitHubLink: undefined,
    anchorLink: 'arg',
    backgroundIcon: ARGBackIcon,
  },
  GPN: {
    icon: GPNTabIcon,
    tabIcon: GPNTabIcon,
    title: 'GPN',
    bundleTechnologies: [],
    description: '',
    shortDescription: '',
    gitHubLink: '',
    anchorLink: '',
    backgroundIcon: GPNBackIcon,
  },
  ElikDio: {
    icon: ElikDioTabIcon,
    tabIcon: ElikDioTabIcon,
    title: 'ElikDio',
    bundleTechnologies: [
      TechnologiesConfig.React.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
    ],
    description: 'Дизайн и вёрстка этого сайта',
    shortDescription: 'Дизайн и вёрстка этого сайта',
    gitHubLink: 'https://github.com/ElikDio/elik-dio',
    anchorLink: '',
    backgroundIcon: ElikDioBackIcon,
  },
  Layouts: {
    icon: LayoutsTabIcon,
    tabIcon: LayoutsTabIcon,
    title: 'Layouts',
    bundleTechnologies: [],
    description: '',
    shortDescription: '',
    gitHubLink: '',
    anchorLink: '',
    backgroundIcon: LayoutsBackIcon,
  },
};

export interface ProjectData {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  tabIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  bundleTechnologies: React.FC<React.SVGProps<SVGSVGElement>>[];
  goals?: string[];
  description: string;
  shortDescription: string;
  demoImage?: string;
  demoImages?: string[];
  demoLink?: string;
  gitHubLink?: string;
  anchorLink: string;
  backgroundIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
