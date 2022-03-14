import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const ADD_POST = gql`
  mutation addPost($postText: String!,$postTitle: String!) {
    addPost(postText:$postText,postTitle: $postTitle) {
      _id
      postTitle
      postText
      createdAt
      comments {
        _id
        commentAuthor
        commentText
      }
    }
  }
`;