let { Model, snakeCaseMappers } = require('objection');

class Locations extends Model {
  static get columnNameMappers() {
    /*
      In JavaScript we want camel case (e.g., createdAt), but
      in SQL we want snake case (e.g., created_at).
      snakeCaseMappers tells Objection to translate between
      the two.
    */
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'organizations';
  }

  static get relationMappings() {
    let Opportunities = require('./opportunities');

    return {
      organization: {
        relation: Model.HasManyRelation,
        modelClass: Opportunities,
        join: {
          from: 'organizations.id',
          to: 'opportunities.organizations_id',
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name', 'category', 'mission'
      ],
      properties: {
        id: { type: 'integer' },
        name: {type: 'string', minLength: 1},
        phonenumber: {type: 'string'},
        email: {type: 'string', minLength: 1},
        category: {type: 'string', minLength: 1},
        mission: { type: 'string', minLength: 1 },
        url: {type: 'string', minLength: 1}
      }
    };
  }
}

module.exports = Locations;
