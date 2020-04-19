import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User, Logo,Gnb } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";

const Header = styled.header`
  width:100%; 
  border: 0;
  top: 0;
  background-image: linear-gradient(#74a5f1,#2276f2);
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
  margin-top:30px;
 `;
const Box = styled.div` 
  border-radius:0px;
  width: 90%;
`;
const HeaderWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;
const HeaderColumn = styled.div`
  width: 10%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const HeaderTitle= styled.div`
  width: 100%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;
const Title=styled.h1`
  text-align:center;
  font-size:22px;
  color:white;
  padding-bottom:5px;
`;
const SubTitle=styled.p`
  text-align:center;
  color:white;
  font-size:10px;
`;


const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { data } = useQuery(ME);
  
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <HeaderLink to="/">
            <Logo />
          </HeaderLink>
        </HeaderColumn>
        <HeaderTitle>
          <Title>POMS</Title>
          <SubTitle>Parking Operation Management System</SubTitle>
        </HeaderTitle>
        <HeaderColumn>
          {!data || !data.me ? (
            <HeaderLink to="/#">
              <Gnb />
            </HeaderLink>
          ) : (
            <HeaderLink to={data.me.username}>
              <Gnb />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
