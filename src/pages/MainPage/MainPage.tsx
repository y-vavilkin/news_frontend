import { useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import PostsList from '../../components/PostsList';
import { ALL } from '../../constants/filters';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';
import { filterPosts } from '../../helpers';
import { EMPTY } from '../../constants';
import {
  postsRequest,
  postsSetInput,
  postsSetType
} from '../../redux/actions/posts';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const path = useLocation();

  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const isLoading = useAppSelector(state => state.posts.isLoading);
  const inputText = useAppSelector(state => state.posts.input);
  const posts = useAppSelector(state => state.posts.posts);
  const error = useAppSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  useEffect(() => {
    dispatch(postsSetInput(''));
    dispatch(postsSetType(ALL));
  }, [path]);

  const filteredPosts = useMemo(() => {
    return filterPosts(posts, inputText, typeOfSearch);
  }, [posts, inputText, typeOfSearch]);

  const isNotEmpty = filteredPosts.length > 0;
  const isError = error !== null;

  if (isLoading) return <Loader />;

  if (isError) return <Notify info={error} status="error" />;

  return (
    <>
      {isNotEmpty ? <PostsList postsData={filteredPosts} /> : <Notify info={EMPTY} status="info" />}
    </>
  );
};

export default MainPage;
