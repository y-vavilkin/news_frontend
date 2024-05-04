import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { authCheck } from './redux/actions/auth';
import { useAppDispatch } from './redux/hooks';
import ProfilePage from './pages/ProfilePage';
import CustomModal from './components/Modal';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import './App.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authCheck());
  }, []);

  return (
    <Router>
      <CustomModal/>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:id" element={<ProfilePage />}/>
      </Routes>
    </Router>
  );
};

export default App;
