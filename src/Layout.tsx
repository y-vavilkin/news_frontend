import { Outlet } from 'react-router-dom';

import CustomModal from './components/Modal';
import Header from './components/Header';

const Layout = () => {
  return (
    <>
      <CustomModal/>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Layout;
