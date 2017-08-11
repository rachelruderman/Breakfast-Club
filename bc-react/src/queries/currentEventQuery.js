import { gql } from "react-apollo";

const usersQuery = gql`
  query currentEventQuery {
    event {
      id
      firstName
      lastName
      email
      neighborhood
      voted
      rsvp
      admin
      active
    }
  }
`;

export default currentEventQuery;
