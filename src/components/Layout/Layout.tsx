import Logo from 'components/Logo/Logo';
import {
  LayoutComponent,
  Header,
  NavContainer,
  Main,
  Footer,
} from './styles';
import { LayoutProps } from './types';
import CustomNavLink from 'components/CustomNavLink/CustomNavLink';

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <Logo />
        <NavContainer>
          {/* NavLink выносят в компонент и пропсами передаем название ссылки */}
          <CustomNavLink linkName='home'/>
          <CustomNavLink linkName='about'/>
          <CustomNavLink linkName='users'/>
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
