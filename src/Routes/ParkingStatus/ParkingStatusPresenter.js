import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  height: 50vh;
`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const ParkingStatusPresenter = ({ loading, data }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data && data.ParkingStatus) {
    return (
      <Wrapper>
        <Section>
          {data.ParkingStatus.length === 0 ? (
            <FatText text="No Parking Status Found" />
          ) : (
            data.ParkingStatus.map(parkingStatus => (
              <UserCard
                key={parkingStatus.id}
                floorName={parkingStatus.floorName}
                totalSpace={parkingStatus.totalSpace}
                occupied={parkingStatus.occupied}
              />
            ))
          )}
        </Section>
      </Wrapper>
    );
  }
};

ParkingStatusPresenter.propTypes = {
  loading: PropTypes.bool
};

export default ParkingStatusPresenter;
