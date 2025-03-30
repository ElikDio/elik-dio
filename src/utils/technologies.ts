import { ReactComponent as DockerBackIcon } from '../styles/icons/back-technologies/docker.svg';
import { ReactComponent as PostgreSQLBackIcon } from '../styles/icons/back-technologies/postgresql.svg';
import { ReactComponent as ReactBackIcon } from '../styles/icons/back-technologies/react.svg';
import { ReactComponent as SassBackIcon } from '../styles/icons/back-technologies/sass.svg';
import { ReactComponent as TypeScriptBackIcon } from '../styles/icons/back-technologies/typescript.svg';
import { ReactComponent as VueBackIcon } from '../styles/icons/back-technologies/vue.svg';
import { ReactComponent as AxiosIcon } from '../styles/icons/technologies/axios.svg';
import { ReactComponent as BootstrapIcon } from '../styles/icons/technologies/bootstrap.svg';
import { ReactComponent as CssIcon } from '../styles/icons/technologies/css.svg';
import { ReactComponent as DockerIcon } from '../styles/icons/technologies/docker.svg';
import { ReactComponent as EslintIcon } from '../styles/icons/technologies/eslint.svg';
import { ReactComponent as GitlabIcon } from '../styles/icons/technologies/gitlab.svg';
import { ReactComponent as JavaIcon } from '../styles/icons/technologies/java.svg';
import { ReactComponent as JavaScriptIcon } from '../styles/icons/technologies/javascript.svg';
import { ReactComponent as JestIcon } from '../styles/icons/technologies/jest.svg';
import { ReactComponent as MobxIcon } from '../styles/icons/technologies/mobx.svg';
import { ReactComponent as MongoIcon } from '../styles/icons/technologies/mongo.svg';
import { ReactComponent as NextIcon } from '../styles/icons/technologies/next.svg';
import { ReactComponent as NginxIcon } from '../styles/icons/technologies/nginx.svg';
import { ReactComponent as NodeJSIcon } from '../styles/icons/technologies/nodejs.svg';
import { ReactComponent as NuxtIcon } from '../styles/icons/technologies/nuxt.svg';
import { ReactComponent as OracleIcon } from '../styles/icons/technologies/oracle.svg';
import { ReactComponent as PostgreSQLIcon } from '../styles/icons/technologies/postgresql.svg';
import { ReactComponent as ReactIcon } from '../styles/icons/technologies/react.svg';
import { ReactComponent as ReduxIcon } from '../styles/icons/technologies/redux.svg';
import { ReactComponent as RouterIcon } from '../styles/icons/technologies/router.svg';
import { ReactComponent as SassIcon } from '../styles/icons/technologies/sass.svg';
import { ReactComponent as TailwindIcon } from '../styles/icons/technologies/tailwind.svg';
import { ReactComponent as TypeScriptIcon } from '../styles/icons/technologies/typescript.svg';
import { ReactComponent as VueIcon } from '../styles/icons/technologies/vue.svg';
import { ReactComponent as VuetifyIcon } from '../styles/icons/technologies/vuetify.svg';
import { ReactComponent as WebpackIcon } from '../styles/icons/technologies/webpack.svg';
import { ReactComponent as YandexCloudIcon } from '../styles/icons/technologies/yandex-cloud.svg';
import { ReactComponent as ReactTabIcon } from '../styles/icons/tab-technologies/react.svg'
import { ReactComponent as DockerTabIcon } from '../styles/icons/tab-technologies/docker.svg'
import { ReactComponent as PostgreSQLTabIcon } from '../styles/icons/tab-technologies/pg.svg'
import { ReactComponent as SassTabIcon } from '../styles/icons/tab-technologies/sass.svg'
import { ReactComponent as TSTabIcon } from '../styles/icons/tab-technologies/typescript.svg'
import { ReactComponent as VueTabIcon } from '../styles/icons/tab-technologies/vue.svg'

export const TechnologiesConfig = {
  React: {
    icon: ReactIcon,
    tabIcon: ReactTabIcon,
    title: 'React',
    description: 'React — это моя основная технология для разработки',
    grade: 4,
    gradeColor: '#61dbfb',
    years: 3,
    backgroundIcon: ReactBackIcon,
    bundleTechnologies: [NextIcon, MobxIcon, ReduxIcon, WebpackIcon],
  },
  TypeScript: {
    icon: TypeScriptIcon,
    tabIcon: TSTabIcon,
    title: 'TypeScript',
    description: 'TypeScript - является основой большинства моих проектов',
    grade: 4,
    gradeColor: '#007acc',
    years: 4,
    backgroundIcon: TypeScriptBackIcon,
    bundleTechnologies: [JavaScriptIcon, JestIcon, EslintIcon, AxiosIcon],
  },
  Sass: {
    icon: SassIcon,
    tabIcon: SassTabIcon,
    title: 'Sass/Scss',
    description: 'Более 3 лет я использую препроцессор в своих проектах',
    grade: 4,
    gradeColor: '#cd6799',
    years: 3.5,
    backgroundIcon: SassBackIcon,
    bundleTechnologies: [CssIcon, BootstrapIcon, TailwindIcon],
  },
  Vue: {
    icon: VueIcon,
    tabIcon: VueTabIcon,
    title: 'Vue',
    description:
      'Vue - технология, с которой я недавно познакомился в рамках нового проекта',
    grade: 2,
    gradeColor: '#41b883',
    years: 0.05,
    backgroundIcon: VueBackIcon,
    bundleTechnologies: [NuxtIcon, VuetifyIcon, BootstrapIcon],
  },
  PostgreSQL: {
    icon: PostgreSQLIcon,
    tabIcon: PostgreSQLTabIcon,
    title: 'PostgreSQL',
    description:
      'PostgreSQL — мощная и надежная СУБД, которую я использую для проектов',
    grade: 3,
    gradeColor: '#336791',
    years: 3,
    backgroundIcon: PostgreSQLBackIcon,
    bundleTechnologies: [MongoIcon, OracleIcon, NodeJSIcon, JavaIcon ],
  },
  Docker: {
    icon: DockerIcon,
    tabIcon: DockerTabIcon,
    title: 'Docker',
    description:
      'Активно использую Docker для масштабируемого развертывания приложений',
    grade: 3,
    gradeColor: '#2396ed',
    years: 3,
    backgroundIcon: DockerBackIcon,
    bundleTechnologies: [GitlabIcon, YandexCloudIcon, NginxIcon],
  },
  Next: {
    icon: NextIcon,
    title: 'Next',
  },
  MobX: {
    icon: MobxIcon,
    title: 'MobX',
  },
  ReduX: {
    icon: ReduxIcon,
    title: 'ReduX',
  },
  WebPack: {
    icon: WebpackIcon,
    title: 'Web Pack',
  },
  JavaScript: {
    icon: JavaScriptIcon,
    title: 'Java Script',
  },
  Jest: {
    icon: JestIcon,
    title: 'Jest',
  },
  Eslint: {
    icon: EslintIcon,
    title: 'Eslint',
  },
  Axios: {
    icon: AxiosIcon,
    title: 'Axios',
  },
  CSS: {
    icon: CssIcon,
    title: 'CSS',
  },
  Bootstrap: {
    icon: BootstrapIcon,
    title: 'Boot strap',
  },
  Tailwind: {
    icon: TailwindIcon,
    title: 'Tail wind',
  },
  Nuxt: {
    icon: NuxtIcon,
    title: 'Nuxt',
  },
  Vuetify: {
    icon: VuetifyIcon,
    title: 'Vuetify',
  },
  Mongo: {
    icon: MongoIcon,
    title: 'Mongo',
  },
  Java: {
    icon: JavaIcon,
    title: 'Java',
  },
  NodeJS: {
    icon: NodeJSIcon,
    title: 'NodeJS',
  },
  Oracle: {
    icon: OracleIcon,
    title: 'Oracle',
  },
  Router: {
    icon: RouterIcon,
    title: 'Router',
  },
  Gitlab: {
    icon: GitlabIcon,
    title: 'Gitlab',
  },
  YandexCloud: {
    icon: YandexCloudIcon,
    title: 'Yandex Cloud',
  },
  Nginx: {
    icon: NginxIcon,
    title: 'Nginx',
  },
};

export interface TechnologyData {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  tabIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  grade?: number;
  gradeColor?: string;
  years?: number;
  backgroundIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  bundleTechnologies?: React.FC<React.SVGProps<SVGSVGElement>>[];
}
