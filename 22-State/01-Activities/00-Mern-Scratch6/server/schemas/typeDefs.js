const typeDefs = `
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }
  type User {
    _id: ID                      
    username: String
    email: String
    messages: [Message]
  }

  type Message{
    _id: ID
    text: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    users: [User]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
