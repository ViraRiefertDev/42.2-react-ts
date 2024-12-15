import {
  LayoutComponent,
  Header,
  LogoContainer,
  NavContainer,
  StyledNavLink,
  Main,
  Footer,
} from './styles';
import { LayoutProps } from './types';

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer></LogoContainer>
        <NavContainer>
          {/* NavLink выносят в компонент и пропсами передаем ссылку и название ссылки и стили для active */}
          <StyledNavLink to='/' style={({isActive})=>({textDecoration: isActive ? 'underline':'none'}) }>Home</StyledNavLink>
          <StyledNavLink to='/about' style={({isActive})=>({textDecoration: isActive ? 'underline':'none'}) }>About</StyledNavLink>
          <StyledNavLink to='/users' style={({isActive})=>({textDecoration: isActive ? 'underline':'none'}) }>Users</StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoContainer></LogoContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
