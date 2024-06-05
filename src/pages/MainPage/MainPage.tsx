import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { postsRequest, resetSearch } from '../../redux/actions/posts';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { EMPTY_POSTS, TOKEN } from '../../constants';
import PostsList from '../../components/PostsList';
import { Post } from '../../interfaces/posts';
import Notify from '../../components/Notify';
import Loader from '../../components/Loader';
import { filterPosts } from '../../helpers';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const path = useLocation();

  const textForSearch = useAppSelector(state => state.posts.textForSearch);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const isLoading = useAppSelector(state => state.posts.isLoading);
  const id = useAppSelector(state => state.auth.authUser?.id);
  const posts = useAppSelector(state => state.posts.posts);
  const error = useAppSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  useEffect(() => {
    dispatch(resetSearch());
    const token = new URLSearchParams(path.search).get('token')?.slice(1, -1);

    if (token) {
      localStorage.setItem(TOKEN, token);
    }
  }, [path]);

  useEffect(() => {
    const token = new URLSearchParams(path.search).get('token')?.slice(1, -1);

    if (id && token) {
      navigate(`/users/${id}`);
    }
  }, [id]);

  const filteredPosts: Post[] = useMemo(() => {
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
