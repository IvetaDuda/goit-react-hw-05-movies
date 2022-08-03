import { Outlet } from 'react-router-dom';
import { Nav, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
      <Outlet />
    </Nav>
  );
};
export default Navigation;
