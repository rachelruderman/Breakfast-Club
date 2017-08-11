import { gql } from "react-apollo";

const guestListQuery = gql`
  query guestListQuery {
    users {
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

export default guestListQuery;
