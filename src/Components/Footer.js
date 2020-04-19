import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width:100%;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  margin: 50px 0px;
`;

const List = styled.ul`
  display: flex;
  width:100%;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const FooterLog = styled.div`
  background-color:#2276f2;
  color: white;
  text-align:center;
  font-size:15px;
  padding:7px;
`;const Copyright = styled.div`
background-color:black;
color: white;
text-align:center;
font-size:8px;
padding:7px;
`;

export default () => (
  <Footer>
    <FooterLog>TIS, Inc</FooterLog>
    <Copyright>Copyright&copy; TIS All rights reserved.</Copyright>
  </Footer>
);
