import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { authCheck } from './redux/actions/auth';

import Layout from './components/Layout/Layout';
import ProfilePage from './pages/ProfilePage';
import { useAppDispatch } from './hooks';
import MainPage from './pages/MainPage';
import { TOKEN } from './constants';
import './App.scss';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/users/:id',
        element: <ProfilePage />
      }]
  }
];

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem(TOKEN) !== null) {
      dispatch(authCheck());
    }
  }, []);

  const routing = useRoutes(routes);

  return (
    <>
      {routing}
    </>
  );
};

export default App;
