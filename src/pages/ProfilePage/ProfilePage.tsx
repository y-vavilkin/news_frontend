import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userRequest } from '../../redux/actions/user';
import { UNAUTHORIZED } from '../../constants/errors';
import PostsList from '../../components/PostsList';
import UserCard from '../../components/UserCard';
import { EMPTY_POSTS } from '../../constants';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const posts = useAppSelector(state => state.currentUser.user?.posts);
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
      navigate('/');
    }
  }, [id]);

  useEffect(() => {
    if (error === UNAUTHORIZED) {
      navigate('/');
    }
  }, [error]);

  if (isLoading) return <Loader />;

  return (
    <>
      {!isUserExist && isError && <Notify info={error} status="error" />}
      {isUserExist && (
        <>
          <UserCard id={Number(id)} dataUser={dataUser} />
          {isNotEmpty
            ? (<PostsList postsData={posts} />)
            : (<Notify info={EMPTY_POSTS} status="info" />)}
        </>
      )}
    </>
  );
};

export default ProfilePage;
