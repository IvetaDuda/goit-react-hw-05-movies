import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  border-bottom: 1px solid #2a363b;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 18px;
  text-transform: uppercase;
  &:not(:last-child) {
    margin: 0 20px;
  }

  &.active {
    color: #f65027;
  }
`;
