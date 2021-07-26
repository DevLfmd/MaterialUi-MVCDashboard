import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';

export const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Página não encontrada | {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404: A página que você procura não está aqui.
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          Ou você tentou um caminho duvidoso ou veio aqui por engano.
          Seja o que for, tente usar a navegação.
        </Typography>
      </Container>
    </Box>
  </React.Fragment>
);