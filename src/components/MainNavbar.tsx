import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, Box, Toolbar, Typography, Badge } from '@material-ui/core';
import { Email, Phone, ShoppingCart } from '@material-ui/icons';
import { useRedux } from '../hooks/useRedux';

import Logo from './Logo';

const useStyles = makeStyles({
  toolbar: { 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    boxShadow: '0px 0px 3px #000' 
  },
  toolbarMenu: { 
    display: 'flex', 
    width: '100vw', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    background: '#FFF', 
    boxShadow: '0px 0px 3px #000' 
  },
  box: { 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center' 
  }
});

const MainNavbar = (props: any) => {
  const { useAppSelector } = useRedux();
  const navigate = useNavigate();
  const classes = useStyles();

  const loggedIn = useAppSelector((state: any) => state.auth.loggedIn) || localStorage.getItem('token') != null ? true : false;
  const cartCount = useAppSelector((state: any) => state.cart.items.length);

  return (
    <AppBar
      elevation={0}
      {...props}
    >
      <Toolbar color="primary" className={classes.toolbar} sx={{ height: 64 }}>
        <Box>
          <Box component="div" className={classes.box}>
            <Phone fontSize="small" /> 
            <Typography variant="body2" component="span">
              &nbsp;+88012 3456 7894 
            </Typography>
          </Box>
          <Box component="div" className={classes.box}>
            <Email fontSize="small" /> 
            <Typography variant="body2" component="span">
              &nbsp;contato@digitec.com.br
            </Typography>
          </Box>
        </Box>
        <Box>
          {loggedIn === false ? (
            <RouterLink to="/entrar">
              <Typography variant="body2" color="#FFF">
                Entrar / Cadastrar-se
              </Typography>
            </RouterLink>
          ) : (
            <RouterLink to="/painel-de-controle">
              <Typography variant="body2" color="#FFF">
                Painel de controle
              </Typography>
            </RouterLink>
          )}
        </Box>
      </Toolbar>
      <Toolbar className={classes.toolbarMenu} sx={{ height: 64 }}>
        <Box>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Box>
        <Box>
          <Button 
            color="primary"
            onClick={() => navigate('/carrinho')}
          >
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCart />
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;