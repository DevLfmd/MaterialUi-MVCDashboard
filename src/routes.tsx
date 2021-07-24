import { Navigate } from 'react-router';
import RequestList from './views/RequestList';
import { Outlet } from 'react-router-dom';
import { 
  Account,
  Dashboard,
  Login,
  Register,
  Settings,
  NotFound
} from './views';

import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';

const routes = (loggedIn: boolean) => [
  {
    path: 'painel-de-controle',
    element: loggedIn ? <DashboardLayout /> : <Navigate to="/" />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'perfil', element: <Account /> },
      { path: 'lista-de-pedidos', element: <RequestList /> },
      { path: 'configuracoes', element: <Settings /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '',
    element: loggedIn === false ? <Outlet/> : <Navigate to="/painel-de-controle" />,
    children: [
      { path: '', element: <MainLayout /> },
      { path: 'entrar', element: <Login /> },
      { path: 'registrar-se', element: <Register /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

export default routes;
