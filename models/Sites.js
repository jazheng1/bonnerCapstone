let { Model, snakeCaseMappers } = require('objection');

class Volunteer extends Model {
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
    return 'sites';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'body',
      ],
      properties: {
        id: { type: 'integer' },
        name: {type: 'string', minLength: 1},
        category: {type: 'string', minLength: 1},
        info: { type: 'string', minLength: 1 },
        job: {type: 'string', minLength: 1}
      }
    };
  }
}

module.exports = Volunteer;
