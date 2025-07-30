const { Class } = require('../models');

// functions to read / write data
const resolvers = {
  Query: {
    classes: async () => {
      // read query for Mongo
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
