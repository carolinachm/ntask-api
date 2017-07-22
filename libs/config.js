export default {
  database: 'ntask-api',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `ntask.sqlite`,
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'Libr##',
  jwtSession: { session: false },
};
