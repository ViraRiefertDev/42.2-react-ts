import styled from "@emotion/styled";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
`;

export const Header = styled.header`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width:100%;
  padding: 20px;
  background-color: rebeccapurple;
  color:white;
`

export const LogoContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius:50%
`;

export const NavContainer = styled.nav`
  display: flex;
  gap:15px;

`;

export const Main = styled.main`
  display: flex;
  flex-direction:column;
  flex:1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width:100%;
  padding: 20px;
  background-color: rebeccapurple;
  color:white;
`;

