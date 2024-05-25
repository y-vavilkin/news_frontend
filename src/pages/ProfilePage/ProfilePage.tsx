import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { postsSetInput, postsSetPage, postsSetType } from '../../redux/actions/posts';
import { userFailed, userRequest, userReset } from '../../redux/actions/user';
import { EMPTY, TIME_REDIRECT, PROFILE_PAGE, ALL } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BAD_URL, UNAUTHORIZED } from '../../constants/errors';
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

  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const inputText = useAppSelector(state => state.posts.input);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  const [posts, setPosts] = useState<Post[]>([]);

  const isNotEmpty = posts !== undefined && posts.length !== 0;
  const isUserExist = dataUser !== null;
  const isError = error !== null;

  useEffect(() => {
    dispatch(postsSetInput(''));
    dispatch(postsSetPage(PROFILE_PAGE));
    dispatch(postsSetType(ALL));
  }, []);

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
    setPosts(filterPosts(userPosts, inputText, typeOfSearch));
  }, [userPosts, inputText, typeOfSearch]);

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
          {isNotEmpty ? <PostsList postsData={posts} /> : <Notify info={EMPTY} status="info" />}
        </>
      )}
    </>
  );
};

export default ProfilePage;
