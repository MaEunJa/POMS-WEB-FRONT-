import React from "react";
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery, useMutation } from "react-apollo-hooks";
import ParkingStatusPresenter from "./ParkingStatusPresenter";

const GET_PARKINGSTATUS = gql`
  query ParkingStatus {
    allParkingStatus{
      id
      floorName
      totalSpace
      occupied
    }
}`;

export default withRouter(() => {
  console.log("parking status withrouter");
  const { data, loading } = useQuery(GET_PARKINGSTATUS);
  console.log("parking status withrouter->");
  console.log(data);
  return <ParkingStatusPresenter loading={loading} data={data} />;
});
