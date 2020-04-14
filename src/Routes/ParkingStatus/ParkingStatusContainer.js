import React from "react";
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery, useMutation } from "react-apollo-hooks";
import ParkingStatusPresenter from "./ParkingStatusPresenter";

const GET_PARKINGSTATUS = gql`
  query allParkingStatus() {
<<<<<<< HEAD
    ParkingStatus() {
=======
>>>>>>> 0a320f0daa80340f7c660a015ebd2996273486e9
      id
      floorCode
      floorName
      totalSpace
      occupied
  }
`;

export default withRouter(() => {
  const { data, loading } = useQuery(GET_PARKINGSTATUS);
  return <ParkingStatusPresenter loading={loading} data={data} />;
});
