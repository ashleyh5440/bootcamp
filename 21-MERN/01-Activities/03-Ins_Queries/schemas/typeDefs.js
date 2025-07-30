const typeDefs = `
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
  }
  type User{
    username: String
   # passwords should not be readable in a typedef, don't add it as a column
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    users: [User]
  }
`;

module.exports = typeDefs;
