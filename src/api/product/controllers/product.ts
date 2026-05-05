/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::product.product',
  ({ strapi }) => ({

    async calculateShipping(ctx) {

      const {
        productId,
        presentationValue,
        quantity
      } = ctx.request.body;

      const product: any = await strapi.entityService.findOne(
        'api::product.product',
        productId,
        {
          populate: ['presentationAndPrice'],
        }
      );

      const presentation = product.presentationAndPrice.find(
        (p: any) => p.presentation === presentationValue
      );

      if (!presentation) {
        return ctx.badRequest('Presentation not found');
      }

      const weight = Number(presentation.weight);

      let totalWeight = 0;

      if (presentation.shippingMode === 'block') {

        totalWeight = Math.ceil(
          quantity / presentation.unitsPerBlock
        );

      }

      else {

        const billableWeightPerUnit =
          Math.ceil(weight);

        totalWeight =
          billableWeightPerUnit * quantity;

      }

      ctx.send({
        totalWeight,
      });
    },

  })
);