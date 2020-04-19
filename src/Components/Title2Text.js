import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.h1`
  font-weight:bold;
  display:block;
  color: #ccc ;
  font-size:11px;
`;

const Title1Text = ({ text, className }) => (

  <Text className={className}>{text}</Text>

);

Title1Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title1Text;
