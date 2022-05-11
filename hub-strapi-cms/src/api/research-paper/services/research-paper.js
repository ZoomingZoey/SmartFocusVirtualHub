'use strict';

/**
 * research-paper service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::research-paper.research-paper');
