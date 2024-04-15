import Posts from '../../components/Posts/Posts';

import classes from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={classes.main}>
      <Posts/>
    </div>
  );
};

export default MainPage;
