let { Model, snakeCaseMappers } = require('objection');

class Summer extends Model {
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
    return 'summerservice';
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
        number: {type: 'string'},
        email: {type: 'string', minLength: 1},
        category: {type: 'string', minLength: 1},
        mission: { type: 'string', minLength: 1 }
      }
    };
  }
}

module.exports = Summer;
