
export default {
  routes: [
    {
      method: 'POST',
      path: '/products/calculate-shipping',
      handler: 'product.calculateShipping',
      config: {
        auth: false,
      },
    },
  ],
};