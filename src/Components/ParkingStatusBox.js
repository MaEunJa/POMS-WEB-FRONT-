import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import { Link } from "react-router-dom";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

const ParkingStatusBox = ({ floorName, totalSpace, occupied}) => (
  <Card>
    <ELink to={`/${floorName}`}>
      <FatText text={floorName} />
    </ELink>
    <FatText text={totalSpace} />
    <FatText text={occupied} />
  </Card>
);

ParkingStatusBox.propTypes = {
  floorName: PropTypes.string.isRequired,
  totalSpace: PropTypes.number.isRequired,
  occupied: PropTypes.number.isRequired,
};

export default ParkingStatusBox;
