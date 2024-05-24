import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { userFailed, userRequest, userReset } from '../../redux/actions/user';
import { postsSearchReceived, postsSetPage } from '../../redux/actions/posts';
import { EMPTY_POSTS, PROFILE_PAGE, TIME_REDIRECT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BAD_URL, UNAUTHORIZED } from '../../constants/errors';
import { changeError, searchPosts } from '../../helpers';
import PostsList from '../../components/PostsList';
import UserCard from '../../components/UserCard';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const globalPosts = useAppSelector(state => state.posts.posts);
  const postsForView = useAppSelector(state => state.posts.postsForView);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const inputText = useAppSelector(state => state.posts.input);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  const isNotEmpty = postsForView !== undefined && postsForView.length !== 0;
  const isUserExist = dataUser !== null;
  const isError = error !== null;

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

  useEffect(() => {
    dispatch(postsSetPage(PROFILE_PAGE));
    dispatch(postsSearchReceived(userPosts));
    return () => {
      dispatch(postsSearchReceived(globalPosts));
    };
  }, [userPosts]);

  useEffect(() => {
    dispatch(postsSearchReceived(searchPosts(userPosts, inputText, typeOfSearch)));
  }, [inputText, typeOfSearch]);

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
            ? <PostsList postsData={postsForView} />
            : <Notify info={EMPTY_POSTS} status="info" />}
        </>
      )}
    </>
  );
};

export default ProfilePage;
