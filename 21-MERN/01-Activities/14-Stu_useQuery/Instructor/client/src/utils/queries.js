import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
query Thoughts {
  thoughts {
    _id
    comments {
      _id
      commentText
      createdAt
    }
    createdAt
    thoughtAuthor
    thoughtText
  }
}
`;