export const paths = {
  login: {
    path: '/',
    getHref: () => '/',
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    home: {
      path: '',
      getHref: () => '/app',
    },
  },
};
