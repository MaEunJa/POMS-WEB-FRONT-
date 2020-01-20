import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border: 0;
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
  margin-bottom:15px;
  border-bottom:2px solid blue;
`;
const HeadingValue=styled.h1`
  font-size:22px;
  text-align:center;
`;
const Heading = ({
  value
}) => (
  <Container>
    <HeadingValue>{value}</HeadingValue>
  </Container>
);


export default Heading;
