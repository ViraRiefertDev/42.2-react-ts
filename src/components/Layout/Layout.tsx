import Logo from 'components/Logo/Logo';
import {
  LayoutComponent,
  Header,
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
        <Logo />
        <NavContainer>
          {/* NavLink выносят в компонент и пропсами передаем название ссылки */}
          <StyledNavLink
            to='/'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to='/about'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to='/users'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Users
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Logo />
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
