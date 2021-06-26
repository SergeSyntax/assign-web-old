module.exports = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type:'string',
            faker: 'datatype.uuid',
          },
          firstName: {
            type: 'string',
            faker: 'name.firstName',
          },
          lastName: {
            type: 'string',
            faker: 'name.lastName',
          },
          email: {
            type: 'string',
            faker: 'internet.email',
          },
          password: {
            type: 'string',
            faker: 'internet.password',
          },
        },
        required: ['email'],
      },
    },
  },
  required: ['users'],
};
