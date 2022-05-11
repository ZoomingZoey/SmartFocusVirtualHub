'use strict';

/**
 *  inquiry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::inquiry.inquiry', ({ strapi }) => ({
  async create(ctx) {
    // perform the original create action and get the response
    const response = await super.create(ctx);

    // send an email to the admins
    await strapi.plugins['email'].services.email.send({
      to: 'zachcoley123@gmail.com',
      from: response.data.attributes.email,
      replyTo: response.data.attributes.email,
      subject: `
        New inquiry on Smart Focus from ${response.data.attributes.first_name} ${response.data.attributes.last_name}: ${response.data.attributes.subject}
      `,
      text: response.data.attributes.subject,
      html: response.data.attributes.message,
    });

    // return the create response
    return response;
  }
}));
