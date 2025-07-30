import { gql } from '@apollo/client';

export const QUERY_ALL_PROFILES = gql`
  query allProfiles {
      profiles {
      _id
      name
      skills
    }
  }
`;

export const ME_QUERY = gql`
query ME {
  me {
    _id
    email
    username
  }
}
`