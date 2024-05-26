import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import PostsList from '../../components/PostsList';
import { Post } from '../../interfaces/posts';
import Notify from '../../components/Notify';
import { ALL, EMPTY } from '../../constants';
import Loader from '../../components/Loader';
import { filterPosts } from '../../helpers';
import {
  postsRequest,
  postsSetInput,
  postsSetType
} from '../../redux/actions/posts';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const path = useLocation();
  const [filtredPosts, setFiltredPosts] = useState<Post[]>([]);

  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const isLoading = useAppSelector(state => state.posts.isLoading);
  const inputText = useAppSelector(state => state.posts.input);
  const posts = useAppSelector(state => state.posts.posts);
  const error = useAppSelector(state => state.posts.error);

  const isNotEmpty = filtredPosts.length > 0;
  const isError = error !== null;

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  useEffect(() => {
    dispatch(postsSetInput(''));
    dispatch(postsSetType(ALL));
  }, [path]);

  useEffect(() => {
    setFiltredPosts(posts);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return filterPosts(posts, inputText, typeOfSearch);
  }, [posts, inputText, typeOfSearch]);

  useEffect(() => {
    setFiltredPosts(filteredPosts);
  }, [filteredPosts]);

  if (isLoading) return <Loader />;

  if (isError) return <Notify info={error} status="error" />;

  return (
    <>
      {isNotEmpty ? <PostsList postsData={filtredPosts} /> : <Notify info={EMPTY} status="info" />}
    </>
  );
};

export default MainPage;
