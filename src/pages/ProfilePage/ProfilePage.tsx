import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { userFailed, userRequest, userReset } from '../../redux/actions/user';
import { postsSetInput, postsSetType } from '../../redux/actions/posts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BAD_URL, UNAUTHORIZED } from '../../constants/errors';
import { EMPTY, TIME_REDIRECT, ALL } from '../../constants';
import { changeError, filterPosts } from '../../helpers';
import PostsList from '../../components/PostsList';
import UserCard from '../../components/UserCard';
import { Post } from '../../interfaces/posts';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const path = useLocation();
  const [filtredPosts, setFiltredPosts] = useState<Post[]>([]);

  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);
  const inputText = useAppSelector(state => state.posts.input);

  const isNotEmpty = filtredPosts.length !== 0;
  const isUserExist = dataUser !== null;
  const isError = error !== null;

  useEffect(() => {
    dispatch(postsSetInput(''));
    dispatch(postsSetType(ALL));
  }, [path]);

  useEffect(() => {
    const requestId = Number(id);
    if (!isNaN(requestId)) {
      dispatch(userRequest(requestId));
    } else {
      dispatch(userFailed(changeError(BAD_URL)));
    }
  }, [id]);

  useEffect(() => {
    if (error === UNAUTHORIZED || error === changeError(BAD_URL)) {
      setTimeout(() => {
        dispatch(userReset());
        navigate('/');
      }, TIME_REDIRECT);
    }
  }, [error]);

  const filteredPosts = useMemo(() => {
    return filterPosts(userPosts, inputText, typeOfSearch);
  }, [userPosts, inputText, typeOfSearch]);

  useEffect(() => {
    setFiltredPosts(filteredPosts);
  }, [filteredPosts]);

  if (isLoading) return <Loader />;

  return (
    <>
      {!isUserExist && isError && <Notify info={error} status="error" />}
      {isUserExist && (
        <>
          <UserCard
            id={Number(id)}
            login={dataUser.login}
            email={dataUser.email}
            avatarUrl={dataUser.avatarUrl}
          />
          {isNotEmpty
            ? <PostsList postsData={filtredPosts} />
            : <Notify info={EMPTY} status="info" />}
        </>
      )}
    </>
  );
};

export default ProfilePage;
