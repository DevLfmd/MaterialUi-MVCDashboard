import React from 'react';
import { useRedux } from '../hooks/useRedux';
import { signIn } from '../store/auth/actions';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core';

import PasswordField from '../components/form/PasswordField';
import TextField from '../components/form/TextField';

import FacebookIcon from '../assets/icons/Facebook';
import GoogleIcon from '../assets/icons/Google';

import { AtSign } from 'react-feather';

export const Login = () => {
  const { useAppDispatch } = useRedux();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [form, setForm] = React.useState({ email: '', password: '' });

  /**
   * Submissão do formulário
   */
  const onSubmit = async () => {
    const { username, token } = await signIn(form.email, form.password);
    
    if(token !== '')
      dispatch({ type: 'auth/signIn', payload: { username, token } })
  };
  
  return (
    <React.Fragment>
      <Helmet>
        <title>Entrar | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Entrar
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Digite seus dados para acessar a plataforma !
            </Typography>
            <Typography 
              color="textSecondary"
              gutterBottom
              style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}
              variant="body2"
              onClick={() => navigate('/')}
            >Ou volte ao menu !</Typography> 
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <Button
                color="primary"
                fullWidth
                startIcon={<FacebookIcon />}
                onClick={async () => null}
                size="large"
                variant="contained"
              >
                Entrar via Facebook
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Button
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={() => null}
                size="large"
                variant="contained"
              >
                Entrar via Google
              </Button>
            </Grid>
          </Grid>
          <Box
            pb={1}
            pt={3}
          >
            <Typography
              align="center"
              color="textSecondary"
              variant="body1"
            >
              ou entre com seu e-mail e senha
            </Typography>
          </Box>
          <Box pb={4}>
            <TextField
              error={false}
              fullWidth
              helperText={''}
              label="E-mail"
              name="email"
              onChange={(e) => setForm({ ...form, [e.target.name] : e.target.value })}
              type="email"
              value={form.email}
              variant="outlined"
              ssrValidation={[]}
              InputProps={{
                startAdornment: (
                  <AtSign />
                ),  
              }}
            />
          </Box>
          <Box pb={2}>
            <PasswordField
              error={false}
              fullWidth
              helperText={''}
              label="Senha"
              name="password"
              onChange={(e) => setForm({ ...form, [e.target.name] : e.target.value })}
              value={form.password}
              variant="outlined"
              ssrValidation={[]}
            />
          </Box>
          <Box py={2}>
            <Button
              color="primary"
              disabled={false}
              fullWidth
              onClick={onSubmit}
              size="large"
              type="submit"
              variant="contained"
            >
              Entrar
            </Button>
          </Box>
          <Typography
              color="textSecondary"
              variant="body1"
            >
              Não possui uma conta?
              {' '}
              <Link
                component={RouterLink}
                to="/registrar-se"
                variant="h6"
              >
                Cadastre-se
              </Link>
            </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
};