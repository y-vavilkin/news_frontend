import Header from './components/Header';
import Content from './components/Content';
import MainPage from './pages/MainPage';
import './App.scss';

const App = () => {
  return (
    <>
      <Header/>
      <Content component={<MainPage/>}/>
    </>
  );
};

export default App;
