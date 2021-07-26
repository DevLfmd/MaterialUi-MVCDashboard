import { Link as RouterLink } from 'react-router-dom';
import {
  Hidden,
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  Typography
} from '@material-ui/core';

import {
  BarChart,
  Settings,
  Clipboard,
  User
} from 'react-feather';

import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'FullStack-Developer',
  name: 'AdminTec'
};

const items = [
  {
    href: '/painel-de-controle/',
    icon: BarChart,
    title: 'Painel de controle'
  },
  {
    href: '/painel-de-controle/perfil',
    icon: User,
    title: 'Perfil'
  },
  {
    href: '/painel-de-controle/lista-de-pedidos',
    icon: Clipboard,
    title: 'Lista de Pedidos'
  },
  {
    href: '/painel-de-controle/configuracoes',
    icon: Settings,
    title: 'Configurações'
  }
];

type TProps = {
  onMobileClose: () => void;
  openMobile: boolean;
};

const DashboardSidebar: React.FC<TProps> = ({ onMobileClose, openMobile }) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
  
  return (
    <>
      <Drawer
        anchor="left"
        open={openMobile}
        variant="persistent"
        PaperProps={{
          sx: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)'
          }
        }}
      >
        {content}
      </Drawer>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default DashboardSidebar;
