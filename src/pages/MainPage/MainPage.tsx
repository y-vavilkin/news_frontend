import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { postsRequest } from '../../redux/actions/posts';
import PostsList from '../../components/PostsList';
import { EMPTY_POSTS } from '../../constants';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.postsArray);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  if (isLoading) return <Loader />;
  if (error !== null) return <Notify info={error} status='error' />;

  return (
    <>
      {posts.length !== 0
        ? <PostsList postsData={posts} />
        : <Notify info={EMPTY_POSTS} status='info' />}
    </>
  );
};

export default MainPage;
