const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    // TODO: Update resolver to include classes
    professors: async () => {
      // return await Professor.find({}).populate('classes');
      const data = await Professor.find({}).populate('classes');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }
  }
};

module.exports = resolvers;
