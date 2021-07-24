import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

export const Register = () => (
  <React.Fragment>
    <Helmet>
      <title>Registrar-se | {process.env.REACT_APP_NAME}</title>
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
        <Container style={{ paddingTop: '160px', paddingBottom: '60px' }} maxWidth="sm">
          
            <Box sx={{ mb: 3 }}>
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Criar nova conta
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use seu e-mail para criar uma nova conta
              </Typography>
            </Box>
            <TextField
              error={false}
              fullWidth
              helperText={''}
              label="Primeiro nome"
              margin="normal"
              name="firstName"
              onBlur={() => null}
              onChange={() => null}
              value={null}
              variant="outlined"
            />
            <TextField
              error={false}
              fullWidth
              helperText={''}
              label="Último nome"
              margin="normal"
              name="lastName"
              onBlur={() => null}
              onChange={() => null}
              value={null}
              variant="outlined"
            />
            <TextField
              error={false}
              fullWidth
              helperText={''}
              label="Endereço de e-mail"
              margin="normal"
              name="email"
              onBlur={() => null}
              onChange={() => null}
              type="email"
              value={null}
              variant="outlined"
            />
            <TextField
              error={false}
              fullWidth
              helperText={''}
              label="Senha"
              margin="normal"
              name="password"
              onBlur={() => null}
              onChange={() => null}
              type="password"
              value={null}
              variant="outlined"
            />
            <TextField
              error={false}
              fullWidth
              helperText={''}
              label="Confirmar Senha"
              margin="normal"
              name="confirm_password"
              onBlur={() => null}
              onChange={() => null}
              type="password"
              value={null}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={false}
                name="policy"
                onChange={() => null}
              />
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Eu li e concordo com os
                {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="#"
                  underline="always"
                  variant="h6"
                >
                  Termos e condições
                </Link>
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={true}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Registrar-se
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Já possui uma conta?
              {' '}
              <Link
                component={RouterLink}
                to="/entrar"
                variant="h6"
              >
                Entre no sistema
              </Link>
            </Typography>
          
        </Container>
      </Box>
  </React.Fragment>
);