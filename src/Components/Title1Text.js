import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.h1`
  font-weight: bold;
  display:block;
  color: #2075f2 ;
  font-size:15px;
  padding-bottom:5px;
`;

const Title1Text = ({ text, className }) => (

  <Text className={className}>{text}</Text>

);

Title1Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title1Text;
