import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { ALL, EMPTY, MAIN_PAGE } from '../../constants';
import PostsList from '../../components/PostsList';
import { Post } from '../../interfaces/posts';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';
import { filterPosts } from '../../helpers';
import {
  postsRequest,
  postsSetInput,
  postsSetPage,
  postsSetType
} from '../../redux/actions/posts';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);
  const textInput = useAppSelector(state => state.posts.input);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  const [filtredPosts, setFiltredPosts] = useState<Post[]>([]);

  const isNotEmpty = filtredPosts.length > 0;

  useEffect(() => {
    dispatch(postsSetPage(MAIN_PAGE));
    dispatch(postsSetInput(''));
    dispatch(postsSetType(ALL));
    dispatch(postsRequest());
  }, []);

  useEffect(() => {
    setFiltredPosts(posts);
  }, [posts]);

  useEffect(() => {
    setFiltredPosts(filterPosts(posts, textInput, typeOfSearch));
  }, [textInput, typeOfSearch]);

  if (isLoading) return <Loader />;

  if (error !== null) return <Notify info={error} status="error" />;

  return (
    <>
      {isNotEmpty ? <PostsList postsData={filtredPosts} /> : <Notify info={EMPTY} status="info" />}
    </>
  );
};

export default MainPage;
