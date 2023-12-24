import {gql} from "@apollo/client";

export const GET_ROCKETS = gql`
query GetRockets {
  rockets {
    id
    name
    description
  }
}`;
