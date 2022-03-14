const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    me: User
    posts: [Post]
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postTitle: String!,postText: String!): [Post]
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password : String
  }

  type Post {
    _id : ID!
    postTitle :String!
    postText :String!
    createdAt : Date
    comments : [Comments]

  }

  type  Comments {
    _id : ID!
    commentText : String!
    commentAuthor : String!
    createdAt : Date
  }
`;

module.exports = typeDefs;
