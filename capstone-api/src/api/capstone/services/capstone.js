'use strict';

/**
 * capstone service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::capstone.capstone');
