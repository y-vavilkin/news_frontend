import { useNavigate, useParams } from 'react-router-dom';
import Edit from '@mui/icons-material/Edit';
import Add from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useEffect } from 'react';

import placeholderAvatar from '../../assets/placeholderAvatar.webp';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeError, compareUserId } from '../../helpers';
import { userRequest } from '../../redux/actions/user';
import { ERROR_401 } from '../../constants/errors';
import PostsList from '../../components/PostsList';
import { EMPTY_POSTS } from '../../constants';
import Loader from '../../components/Loader';
import Notify from '../../components/Notify';

import classes from './ProfilePage.module.scss';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.currentUser.user?.posts);
  const dataUser = useAppSelector(state => state.currentUser.user);
  const error = useAppSelector(state => state.currentUser.error);
  const isLoading = useAppSelector(state => state.currentUser.isLoading);
  const currentUserId = useAppSelector(state => state.auth.user?.id);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userRequest(Number(id)));

    if (error === changeError(ERROR_401)) {
      navigate('/');
    }
  }, [id, error]);

  if (error !== null) return <Notify info={error} status='error' />;

  if (isLoading) return <Loader />;

  return (
    <>
      <div className={classes.userDescription}>
        <img className={classes.avatar} src={dataUser?.avatarUrl ?? placeholderAvatar} alt="Avatar" />
        <div className={classes.information}>
          <p>Login: {dataUser?.login}</p>
          <p>Email: {dataUser?.email}</p>
        </div>
        {
          compareUserId(id, currentUserId) && (
            <div className={classes.buttons}>
              <Button variant="contained" startIcon={<Add />}>Add Post</Button>
              <Button variant="contained" startIcon={<Edit />}>Edit Profile</Button>
            </div>
          )
        }
      </div>
      <>
        {
          posts !== undefined && (
            posts.length !== 0
              ? <PostsList postsData={posts} />
              : <Notify info={EMPTY_POSTS} status='info' />
          )
        }
      </>
    </>
  );
};

export default ProfilePage;
