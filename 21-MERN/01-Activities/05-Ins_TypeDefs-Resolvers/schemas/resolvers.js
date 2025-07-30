const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      const data = await School.find({}).populate('classes').populate({
        path: "classes",
        populate: "professor"
      });
      console.log(data);
      return data;
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate('professor');
    },
    professors: async () => {
      return await Professor.find({});
    }
  }
};

module.exports = resolvers;
