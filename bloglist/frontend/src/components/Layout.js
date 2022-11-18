import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
