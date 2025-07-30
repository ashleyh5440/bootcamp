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
    professors: async () => {
      return await Professor.find({});
    },
    students: async () => {
      return (
        {
          name: "Bob",
          year: 2024,
          email: "bob@turtle.com",
          password: "turtlesrule"
        }
      )
    }
  }
};

module.exports = resolvers;
