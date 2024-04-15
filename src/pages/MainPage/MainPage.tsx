import PostsList from '../../components/PostsList/PostsList';

import classes from './MainPage.module.scss';
import mock from './mock.json';

const MainPage = () => {
  return (
    <div className={classes.main}>
      <PostsList postsData={mock}/>
    </div>
  );
};

export default MainPage;
