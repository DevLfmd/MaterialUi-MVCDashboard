import { useState } from 'react';
import { useRedux } from '../hooks/useRedux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { HomeOutlined } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

type TProps = {
  onMobileNavOpen: () => void;
};

const DashboardNavbar: React.FC<TProps> = ({ onMobileNavOpen, ...rest }) => {
  const navigate = useNavigate();
  const { useAppDispatch } = useRedux();
  const dispatch = useAppDispatch();
  const [notifications] = useState([]);

  const logout = () => {
    dispatch({ type: 'auth/signOut' });
    navigate('/entrar');
  };

  return (
    <AppBar
      
      elevation={0}
      {...rest}
      color="primary"
    >
      <Toolbar style={{ 
        background: '#FFF', 
        boxShadow: '0px 0px 3px #000'
      }} sx={{ height: 64 }}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <RouterLink to="/">
            <IconButton style={{ color: '#172b4d' }}>
              <HomeOutlined />
            </IconButton>
          </RouterLink>
          <IconButton color="primary">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="primary" onClick={logout} >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="primary"
            onClick={() => onMobileNavOpen()}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
