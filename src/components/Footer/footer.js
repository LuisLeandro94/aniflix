import { Button, Grid, createTheme } from '@mui/material';
import React from 'react';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import {
  Col,
  Container,
  Copyright,
  GridContainer,
  Link,
  LinkItem,
  Links,
  Social,
  SocialItem,
} from './styles';

const Footer = () => {
  return (
    <GridContainer
      container
      spacing={2}
      p={4}
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        justifyContent: { xs: 'center', md: 'left' },
      }}>
      <Grid item xs={12} spacing={2}>
        <SocialItem>
          <Facebook />
        </SocialItem>
        <SocialItem>
          <Instagram />
        </SocialItem>
        <SocialItem>
          <Twitter />
        </SocialItem>
        <SocialItem>
          <Youtube />
        </SocialItem>
      </Grid>
      <Grid item xs={12} md={3} flexDirection={'column'}>
        <LinkItem>Voiceover and Subtitles</LinkItem>
        <LinkItem>Media Center</LinkItem>
        <LinkItem>Security</LinkItem>
        <LinkItem>Contact us</LinkItem>
      </Grid>
      <Grid item xs={12} md={3} flexDirection={'column'}>
        <LinkItem>Audio Description</LinkItem>
        <LinkItem>Investor Relations</LinkItem>
        <LinkItem>Legal Provisions</LinkItem>
      </Grid>
      <Grid item xs={12} md={3} flexDirection={'column'}>
        <LinkItem>Help center</LinkItem>
        <LinkItem>Job opportunities</LinkItem>
        <LinkItem>Cookie Preferences</LinkItem>
      </Grid>
      <Grid item xs={12} md={3} flexDirection={'column'}>
        <LinkItem>Gift Cards</LinkItem>
        <LinkItem>Terms of Use</LinkItem>
        <LinkItem>Corporate Information</LinkItem>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined'>Service code</Button>
      </Grid>
      <Grid item xs={12}>
        <Copyright>© 2023 - Aniflix</Copyright>
      </Grid>
    </GridContainer>
  );
};

export default Footer;
