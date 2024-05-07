import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { postsRequest } from '../../redux/actions/posts';
import PostsList from '../../components/PostsList';
import { EMPTY_POSTS } from '../../constants';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);
  const isNotEmpty = posts.length !== 0;

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  if (isLoading) return <Loader />;

  if (error !== null) return <Notify info={error} status="error" />;

  return (
    <>
      {
        isNotEmpty
          ? <PostsList postsData={posts} />
          : <Notify info={EMPTY_POSTS} status="info" />
      }
    </>
  );
};

export default MainPage;
