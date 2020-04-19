import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Title1Text from "../../Components/Title1Text";
import Title2Text from "../../Components/Title2Text";
import Loader from "../../Components/Loader";
import ParkingStatusBox from "../../Components/ParkingStatusBox";
import { Helmet } from "rl-react-helmet";

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
const TitleWrp=styled.div`
padding:15px;
`;
const ParkingStatusPresenter = ({ loading, data }) => {
  console.log(data);
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.allParkingStatus) {
    return (
      <Wrapper>
        <Helmet>
          <title>ParkingStatus | 의정부중흥</title>
        </Helmet>
        <TitleWrp>
          <Title1Text text="의정부 중흥 민락" />
          <Title2Text text="2020-04-20 12:00:00 갱신" />
        </TitleWrp>
        <Section>
          {data.allParkingStatus.length === 0 ? (
            <FatText text="No Parking Status Found" />
          ) : (
            data.allParkingStatus.map(parkingStatus => (
              <ParkingStatusBox
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
