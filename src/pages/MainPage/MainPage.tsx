import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { postsRequest } from '../../redux/actions/posts';
import PostsList from '../../components/PostsList';

import classes from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.postsArray);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(postsRequest());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <ul className={classes.posts}>
          <CircularProgress/>
        </ul>
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <PostsList postsData={posts}/>
    </div>
  );
};

export default MainPage;
