export interface IRoute {
  path: string;
  name: string;
  key: string;
}

export const HomeRoutePaths = {
  HOME: {
    path: '/',
    name: 'Inicio',
    key: 'HOME',
  },
};

export const AboutRoutePaths = {
  HOME: {
    path: '/sobre-mi',
    name: 'Sobre mi',
    key: 'ABOUT',
  }
}

export const KnowledgeRoutePaths = {
  HOME: {
    path: '/conocimientos',
    name: 'Conocimientos',
    key: 'KNOWLEDGE',
  }
}