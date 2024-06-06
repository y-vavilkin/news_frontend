import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { userFailed, userRequest, userReset } from '../../redux/actions/user';
import { BAD_URL, UNAUTHORIZED } from '../../constants/errors';
import { EMPTY_POSTS, TIME_REDIRECT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeError, filterPosts } from '../../helpers';
import { authUserReset } from '../../redux/actions/auth';
import { resetSearch } from '../../redux/actions/posts';
import PostsList from '../../components/PostsList';
import UserCard from '../../components/UserCard';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';
import { Post } from '../../interfaces/posts';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const path = useLocation();

  const textForSearch = useAppSelector(state => state.posts.textForSearch);
  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);

  useEffect(() => {
    dispatch(resetSearch());
  }, [path]);

  useEffect(() => {
    const requestId = Number(id);
    if (!isNaN(requestId)) {
      dispatch(userRequest(requestId));
    } else {
      dispatch(userFailed(changeError(BAD_URL)));
    }
  }, [id]);

  const handleRedirect = (resetAuth = false) => {
    setTimeout(() => {
      if (resetAuth) {
        dispatch(authUserReset());
      }
      dispatch(userReset());
      navigate('/');
    }, TIME_REDIRECT);
  };

  useEffect(() => {
    if (error === UNAUTHORIZED) {
      handleRedirect(true);
    } else if (error === changeError(BAD_URL)) {
      handleRedirect();
    }
  }, [error]);

  const filteredPosts: Post[] = useMemo(() => {
    return filterPosts(userPosts, textForSearch, typeOfSearch);
  }, [userPosts, textForSearch, typeOfSearch]);

  if (isLoading) return <Loader />;

  const isNotEmpty = filteredPosts.length !== 0;
  const isUserExist = dataUser !== null;
  const hasError = error !== null;

  return (
    <>
      {!isUserExist && hasError && <Notify info={error} status="error" />}
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
            : <Notify info={EMPTY_POSTS} status="info" />}
        </>
      )}
    </>
  );
};

export default ProfilePage;
