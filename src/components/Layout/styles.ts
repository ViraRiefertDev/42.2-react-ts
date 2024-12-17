import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const commonStylesHeaderFooter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rebeccapurple;
  color: white;
`;

const commonStylesLayoutMain = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const LayoutComponent = styled.div`
  ${commonStylesLayoutMain};
`;

export const Header = styled.header`
  ${commonStylesHeaderFooter};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Main = styled.main`
  ${commonStylesLayoutMain};
`;

export const Footer = styled.footer`
  ${commonStylesHeaderFooter}
`;
