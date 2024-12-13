import { LayoutProps } from './types';
import {
  Footer,
  Header,
  LayoutComponent,
  NavContainer,
  LogoContainer,
  Main,
} from './styles';

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer></LogoContainer>
        <NavContainer>Ссылки</NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoContainer></LogoContainer>Футер
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
