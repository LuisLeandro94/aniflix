import React, { useState } from 'react';
// import { ReactComponent as Logo } from '../../assets/Aniflix_logo.svg';
import Logo from '../../assets/Vector.png';
import { ReactComponent as NotificationBell } from '../../assets/icons/bell.svg';
import { ReactComponent as Gift } from '../../assets/icons/gift.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/magnifying.svg';

import { Box, Grid } from '@mui/material';
import {
  Container,
  GridContainer,
  GridItem,
  Item,
  LeftPanel,
  MenuItems,
  RightPanel,
} from './styles';

const Header = () => {
  const [user, setUser] = useState('Luis');
  return (
    <GridContainer container alignContent={'center'} p={4} spacing={2}>
      <GridItem
        item
        xs={12}
        md={1}
        sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Box component='img' maxWidth={'100%'} alt='Logo' src={Logo} />
      </GridItem>
      <Grid
        container
        item
        spacing={2}
        md={8}
        sx={{ display: { xs: 'none', md: 'flex' } }}>
        <GridItem item>
          <Item href='/'>Homepage</Item>
        </GridItem>
        <GridItem item>
          <Item href='/'>Series</Item>
        </GridItem>
        <GridItem item>
          <Item href='/'>Movies</Item>
        </GridItem>
        <GridItem item>
          <Item href='/'>New and trending</Item>
        </GridItem>
        <GridItem item>
          <Item href='/'>My list</Item>
        </GridItem>
      </Grid>
      <Grid
        container
        item
        md={3}
        spacing={2}
        justifyContent={'flex-end'}
        sx={{ display: { xs: 'none', md: 'flex' } }}>
        <GridItem item>
          <SearchIcon />
        </GridItem>
        <GridItem item>
          <Item>{user.toUpperCase()}</Item>
        </GridItem>
        <GridItem item>
          <Gift />
        </GridItem>
        <GridItem item>
          <NotificationBell />
        </GridItem>
      </Grid>
    </GridContainer>
  );
};

export default Header;
