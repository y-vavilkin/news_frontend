import { useEffect, useState } from 'react';

import { postsRequest, postsSearchReceived, postsSetPage } from '../../redux/actions/posts';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { EMPTY_POSTS, MAIN_PAGE } from '../../constants';
import PostsList from '../../components/PostsList';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';
import { searchPosts } from '../../helpers';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [isCanView, setIsCanView] = useState(false);
  const globalPosts = useAppSelector(state => state.posts.posts);
  const posts = useAppSelector((state) => state.posts.postsForView);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);
  const textInput = useAppSelector(state => state.posts.input);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  useEffect(() => {
    dispatch(postsSetPage(MAIN_PAGE));
    dispatch(postsRequest());
  }, []);

  useEffect(() => {
    !isLoading && posts.length > 0 ? setIsCanView(true) : setIsCanView(false);
  }, [isLoading, posts]);

  useEffect(() => {
    dispatch(postsSearchReceived(searchPosts(globalPosts, textInput, typeOfSearch)));
  }, [textInput, typeOfSearch]);

  if (isLoading) return <Loader />;

  if (error !== null) return <Notify info={error} status="error" />;

  return (
    <>
      {isCanView ? <PostsList postsData={posts} /> : <Notify info={EMPTY_POSTS} status="info" />}
    </>
  );
};

export default MainPage;
