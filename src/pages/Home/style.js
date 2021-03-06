import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.background || 'initial'};

  width: 100%;
  min-height: ${(props) => props.minHeight || 'initial'};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'initial'};
  align-items: center;
  align-self: ${(props) => props.alignSelf || 'initial'};

  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  border-radius: ${(props) => props.borderRadius || '0px'};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'flex-end'};
  align-items: ${(props) => props.alignItems || 'initial'};
  align-self: ${(props) => props.alignSelf || 'initial'};
  gap: 22px;
  width: 1018px;
`;

const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: ${(props) => props.active ? '#5D9040' : '#9C9C9C'};
`;

const Logout = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  cursor: pointer;

  color: #5D9040;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  font-style: normal;
  font-weight: 200;
  font-size: 64px;
  line-height: 80px;

  color: #000000;

  margin-top: 16px;
  margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : "124px"};
`;

const DeleteButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;
  max-width: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  padding: 17px;
  margin-left: auto;
  background: #FFF;
  border-radius: 0px 12px 12px 0px;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 'initial'};
  font-size: 14px;
  line-height: 18px;
  margin-right: 35px;
  text-align: ${(props) => props.align || "initial"};

  color: ${(props) => props.color || "initial"};
`;

const UrlLink = styled.a` 
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 'initial'};
  font-size: 14px;
  line-height: 18px;
  text-align: ${(props) => props.align || "initial"};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 255px;

  color: ${(props) => props.color || "initial"};

  cursor: pointer;
`;

const Url = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  background: #80CC74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  padding-left: 20px;
`;

const ContainerRanking = styled.div`
  width: 1018px;
  min-height: 356px;

  background-color: aqua;

  margin-top: 80px;
  margin-bottom: 50px;

  padding: 26px;

  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;  
`;

const ContentRanking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;

const TitleRanking = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 34px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  color: #000000;

  img{
    margin-right: 10px;
  }
`;

const ContainerUsers = styled.ol`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #000000;

  display: flex;
  flex-direction: column;
  
  gap: 17px;

  li:nth-child(1){
    font-size: 26px;
    line-height: 32px;
    margin-left: 15px;
  }

  li:nth-child(2){
    font-size: 22px;
    line-height: 28px;
  }

  li:nth-child(3){
    font-size: 18px;
    line-height: 22px;
  }

  li{
    list-style-type: auto;
    list-style-position: inside;
  }
`;

export {
  Container,
  Flex,
  StyledLink,
  Logout,
  Span,
  Title,
  DeleteButton,
  Url,
  UrlLink,
  ContainerRanking,
  ContentRanking,
  TitleRanking,
  ContainerUsers
};
