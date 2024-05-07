import { Outlet } from 'react-router-dom';

import CustomModal from '../Modal';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <CustomModal />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
