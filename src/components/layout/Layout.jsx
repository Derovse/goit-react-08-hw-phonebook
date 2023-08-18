import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styles';
import Navigation from 'components/navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
          homework created by
          <a href="https://github.com/Derovse"> derovse</a>{' '}
          goit-react-08-hw-phonebook |2023|
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
