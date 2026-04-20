export default {
  routes: [
    {
      method: 'GET',
      path: '/ping',
      handler: (ctx) => {
        ctx.body = 'ok';
      },
      config: {
        auth: false,
      },
    },
  ],
};