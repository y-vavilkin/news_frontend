import { useEffect } from 'react';
import { Alert, CircularProgress } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { postsRequest } from '../../redux/actions/posts';
import PostsList from '../../components/PostsList';

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
      <CircularProgress/>
    );
  }

  if (error !== null) {
    return (
      <Alert severity="error">{error}</Alert>
    );
  }

  return (
      <PostsList postsData={posts}/>
  );
};

export default MainPage;
