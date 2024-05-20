import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { userFailed, userRequest, userReset } from '../../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BAD_URL, UNAUTHORIZED } from '../../constants/errors';
import { EMPTY_POSTS, TIME_REDIRECT } from '../../constants';
import PostsList from '../../components/PostsList';
import UserCard from '../../components/UserCard';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';
import { changeError } from '../../helpers';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const posts = useAppSelector(state => state.currentUser.userPosts);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const isNotEmpty = posts !== undefined && posts.length !== 0;
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
      console.log(error);
      setTimeout(() => {
        dispatch(userReset());
        navigate('/');
      }, TIME_REDIRECT);
    }
  }, [error]);

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
            ? <PostsList postsData={posts} />
            : <Notify info={EMPTY_POSTS} status="info" />}
        </>
      )}
    </>
  );
};

export default ProfilePage;
