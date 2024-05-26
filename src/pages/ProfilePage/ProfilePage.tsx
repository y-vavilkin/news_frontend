import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';

import { userFailed, userRequest, userReset } from '../../redux/actions/user';
import { postsSetInput, postsSetType } from '../../redux/actions/posts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BAD_URL, UNAUTHORIZED } from '../../constants/errors';
import { changeError, filterPosts } from '../../helpers';
import { authUserReset } from '../../redux/actions/auth';
import { EMPTY, TIME_REDIRECT } from '../../constants';
import PostsList from '../../components/PostsList';
import UserCard from '../../components/UserCard';
import { ALL } from '../../constants/filters';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const path = useLocation();

  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);
  const inputText = useAppSelector(state => state.posts.input);

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

  const handleRedirect = useCallback((resetAuth = false) => {
    setTimeout(() => {
      if (resetAuth) {
        dispatch(authUserReset());
      }
      dispatch(userReset());
      navigate('/');
    }, TIME_REDIRECT);
  }, []);

  useEffect(() => {
    if (error === UNAUTHORIZED) {
      handleRedirect(true);
    } else if (error === changeError(BAD_URL)) {
      handleRedirect();
    }
  }, [error]);

  const filteredPosts = useMemo(() => {
    return filterPosts(userPosts, inputText, typeOfSearch);
  }, [userPosts, inputText, typeOfSearch]);

  if (isLoading) return <Loader />;

  const isNotEmpty = filteredPosts.length !== 0;
  const isUserExist = dataUser !== null;
  const isError = error !== null;

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
            ? <PostsList postsData={filteredPosts} />
            : <Notify info={EMPTY} status="info" />}
        </>
      )}
    </>
  );
};

export default ProfilePage;
