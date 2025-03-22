import { ReactComponent as ARGBackIcon } from '../styles/icons/back-projects/arg.svg';
import { ReactComponent as ElikDioBackIcon } from '../styles/icons/back-projects/elik-dio.svg';
import { ReactComponent as GPNBackIcon } from '../styles/icons/back-projects/gpn.svg';
import { ReactComponent as LayoutsBackIcon } from '../styles/icons/back-projects/layouts.svg';
import { ReactComponent as SmartDrivingBackIcon } from '../styles/icons/back-projects/luv.svg';
import { ReactComponent as SortFilesBackIcon } from '../styles/icons/back-projects/sort-files.svg';
import { ReactComponent as ElikDioIcon } from '../styles/icons/elikdio.svg';
import { ReactComponent as ARGIcon } from '../styles/icons/tab-projects/arg.svg';
import { ReactComponent as GPNIcon } from '../styles/icons/tab-projects/gpn.svg';
import { ReactComponent as LayoutsIcon } from '../styles/icons/tab-projects/layouts.svg';
import { ReactComponent as SmartDrivingIcon } from '../styles/icons/tab-projects/luv.svg';
import { ReactComponent as SortFilesIcon } from '../styles/icons/tab-projects/sort-files.svg';
import { TechnologiesConfig } from './technologies';

export const ProjectsConfig = {
  SortFiles: {
    icon: SortFilesIcon,
    title: 'SortFiles',
    demoLink: 'https://sort-files.ru',
    bundleTechnologies: [
      TechnologiesConfig.React.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
    ],
    shortDescription: `Проект создан для удобного распространения приложения Sort Files. Сайт позволяет быстро скачать программу, ознакомиться с её возможностями и оставить обратную связь.`,
    gitHubLink: 'https://github.com/ElikDio/sort-files-website',
    anchorLink: '',
    backgroundIcon: SortFilesBackIcon,
  },
  SmartDriving: {
    icon: SmartDrivingIcon,
    title: 'SmartDriving',
    demoLink: 'https://smartdriving-marketplace-demo.vercel.app/',
    bundleTechnologies: [
      TechnologiesConfig.Next.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
      TechnologiesConfig.ReduX.icon,
      TechnologiesConfig.WebPack.icon,
    ],
    shortDescription: `Маркетплейс, созданный для продажи продуктов компании ЛУВ. В рамках проекта я выполнял комплексную работу по фронтенду: верстка и api`,
    gitHubLink: 'https://github.com/ElikDio/sort-files-website',
    anchorLink: '',
    backgroundIcon: SmartDrivingBackIcon,
  },
  ARG: {
    icon: ARGIcon,
    title: 'ARG',
    bundleTechnologies: [
      TechnologiesConfig.React.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
      TechnologiesConfig.Router.icon,
      TechnologiesConfig.MobX.icon,
    ],
    shortDescription:
      'Проект по автоматизации составления отчета судебного эксперта',
    gitHubLink: undefined,
    anchorLink: '',
    backgroundIcon: ARGBackIcon,
  },
  GPN: {
    icon: GPNIcon,
    title: 'GPN',
    bundleTechnologies: [],
    shortDescription: '',
    gitHubLink: '',
    anchorLink: '',
  },
  ElikDio: {
    icon: ElikDioIcon,
    title: 'ElikDio',
    bundleTechnologies: [
      TechnologiesConfig.React.icon,
      TechnologiesConfig.Sass.icon,
      TechnologiesConfig.TypeScript.icon,
    ],
    shortDescription: 'Дизайн и вёрстка этого сайта',
    gitHubLink: 'https://github.com/ElikDio/elik-dio',
    anchorLink: '',
    backgroundIcon: ElikDioBackIcon,
  },
  Layouts: {
    icon: LayoutsIcon,
    title: 'Layouts',
    bundleTechnologies: [],
    shortDescription: '',
    gitHubLink: '',
    anchorLink: '',
    backgroundIcon: LayoutsBackIcon,
  },
};

export interface ProjectData {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  bundleTechnologies: React.FC<React.SVGProps<SVGSVGElement>>[];
  shortDescription: string;
  demoLink?: string;
  gitHubLink?: string;
  anchorLink: string;
  backgroundIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
