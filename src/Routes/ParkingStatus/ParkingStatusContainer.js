import React from "react";
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery, useMutation } from "react-apollo-hooks";
import ParkingStatusPresenter from "./ParkingStatusPresenter";

const GET_PARKINGSTATUS = gql`
{
    allParkingStatus{
      id
      floorCode
      floorName
      floorOrder
      floorDisplayOrder
      floorMap
      floorGubun
      totalSpace
      occupied
    } 
}`;

export default withRouter(() => {
  const { data, loading } = useQuery(GET_PARKINGSTATUS);
  return <ParkingStatusPresenter loading={loading} data={data} />;
});
