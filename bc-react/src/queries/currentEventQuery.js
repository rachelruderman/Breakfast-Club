import { gql } from "react-apollo";

const usersQuery = gql`
  query currentEventQuery {
    currentEvent {
      date
      vote_status
      place_1 {
        name
      }
      place_2 {
        name
      }
      guestLists {
        user {
          firstName
          lastName
        }
      }
    }
  }
`;

export default currentEventQuery;
