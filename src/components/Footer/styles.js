import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Black, FooterColor } from '../../styles/_colors';

export const GridContainer = styled(Grid)`
  background-color: ${Black};
  align-items: center;
`;

export const LinkItem = styled.a`
  color: ${FooterColor};
  font-family: 'Netflix Sans', sans-serif;
  text-decoration: none;
  display: block;
  margin: 1em 0;
`;

export const SocialItem = styled(LinkItem)`
  display: inline;
  margin: 0 1em;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const Copyright = styled.p`
  color: ${FooterColor};
  font-family: 'Netflix Sans', sans-serif;
`;
