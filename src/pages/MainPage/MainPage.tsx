import { useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import PostsList from '../../components/PostsList';
import { ALL } from '../../constants/filters';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';
import { filterPosts } from '../../helpers';
import { EMPTY_POSTS } from '../../constants';
import {
  postsRequest,
  postsSearch
} from '../../redux/actions/posts';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const path = useLocation();

  const textForSearch = useAppSelector(state => state.posts.textForSearch);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const isLoading = useAppSelector(state => state.posts.isLoading);
  const posts = useAppSelector(state => state.posts.posts);
  const error = useAppSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  useEffect(() => {
    dispatch(postsSearch({ textForSearch: '', typeOfSearch: ALL }));
  }, [path]);

  const filteredPosts = useMemo(() => {
    return filterPosts(posts, textForSearch, typeOfSearch);
  }, [posts, textForSearch, typeOfSearch]);

  const isNotEmpty = filteredPosts.length > 0;
  const hasError = error !== null;

  if (isLoading) return <Loader />;

  if (hasError) return <Notify info={error} status="error" />;

  return (
    <>
      {isNotEmpty
        ? <PostsList postsData={filteredPosts} />
        : <Notify info={EMPTY_POSTS} status="info" />}
    </>
  );
};

export default MainPage;
