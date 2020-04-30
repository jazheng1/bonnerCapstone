let Knex = require('knex');
let { Model } = require('objection');
let dbConfig = require('./knexfile');
let knex = Knex(dbConfig.development);
Model.knex(knex);

global.Opportunities = require('./models/opportunities');
