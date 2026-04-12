export const paths = {
  login: {
    path: '/',
    getHref: () => '/',
  },
  register: {
    path: '/register',
    getHref: () => '/register',
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
