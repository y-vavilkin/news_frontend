import { useEffect } from 'react';

import { checkUserStatus } from './redux/actions/status';
import { useAppDispatch } from './redux/hooks';
import CustomModal from './components/Modal';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import './App.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserStatus());
  });

  return (
    <>
      <CustomModal/>
      <Header />
      <MainPage />
    </>
  );
};

export default App;
