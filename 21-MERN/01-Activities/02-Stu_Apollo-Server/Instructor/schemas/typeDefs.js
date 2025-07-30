const typeDefs = `
  # a definition for a type and it seems to have columns
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # describes a read query that returns a list of classes
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
