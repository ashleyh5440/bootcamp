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
      const data = await Professor.find({});
      /*
      [
        {
          _id: ...
          name: ...
          ...
        }
      ]
      */
      console.log(data)
      return data;
    },
    users: async () => {
      return [
        {
          username: "Test",
          password: "8712384hhjahndufy871yu345!"
        }
      ]
    }
  }
};

module.exports = resolvers;
