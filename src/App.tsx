import Header from './components/Header';
import MainPage from './pages/MainPage';
import CustomModal from './components/Modal/Modal';
import './App.scss';

const App = () => {
  return (
    <>
      <CustomModal/>
      <Header />
      <MainPage />
    </>
  );
};

export default App;
