export const paths = {
  login: {
    path: '/',
    getHref: () => '/',
  },
  register: {
    path: '/register',
    getHref: () => '/register',
  },
  registrationSuccessful: {
    path: '/registration-successful',
    getHref: () => '/registration-successful',
  },
  activeUser: {
    path: '/users/:uuid/activate/:token',
    getHref: (uuid: string, token: string) =>
      `/users/${uuid}/activate/${token}`,
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
