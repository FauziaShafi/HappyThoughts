import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
      posts {
        _id
        postTitle
        postText
        createdAt
      }
    }
  }
`;
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postTitle
      postText
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;