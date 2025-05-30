import { Box, Button, ButtonGroup, ListItem, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { memo } from 'react';

import { deletePostRequested, setIdPost } from '../../redux/actions/user';
import { changeFormatDate, getImageUrlWithBase } from '../../helpers';
import { User as UserDescription } from '../../interfaces/user';
import { Tag as TagDescription } from '../../interfaces/posts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { openModal } from '../../redux/actions/modal';
import { TypeModal } from '../../interfaces/modal';
import { ADMIN, CARD } from '../../constants';
import User from '../User';
import Tag from '../Tag';

import classes from './PostCard.module.scss';

export interface PostProps {
  key: number
  id: number
  title: string
  content: string
  imageUrl: string | null
  createdAt: string
  user: UserDescription
  tags: TagDescription[]
}

const PostCard = ({
  id,
  imageUrl,
  title,
  createdAt,
  content,
  user,
  tags
}: PostProps) => {
  const { id: userUrlId } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const postId = useAppSelector(state => state.currentUser.postId);
  const isLoading = useAppSelector(state => state.currentUser.isLoadingPost);
  const userId = useAppSelector(state => state.auth.authUser?.id);
  const isAuth = useAppSelector(state => state.auth.isOnline);
  const role = useAppSelector(state => state.auth.authUser?.role);

  const isMainPagePath = location.pathname === '/';
  const isUserProfile = userId === Number(userUrlId);
  const isAdmin = role === ADMIN;

  const handleDeletePost = () => {
    dispatch(deletePostRequested(Number(id)));
  };

  const handleEditPost = () => {
    dispatch(setIdPost(id));
    dispatch(openModal(TypeModal.EDIT_POST));
  };

  const handleShowComments = () => {
    dispatch(setIdPost(id));
    dispatch(openModal(TypeModal.COMMENTS));
  };

  return (
    <ListItem className={classes.container} sx={{ p: 0, width: 400 }}>
      <Box className={classes.post}>
        <Box className={classes.imageBlock}>
          <img
            className={classes.image}
            src={getImageUrlWithBase(imageUrl, CARD)}
            alt="image"
            draggable="false"
          />
        </Box>
        <Box className={classes.contentBlock}>
          <Typography variant="h6" className={classes.title}>{title}</Typography>
          <Box className={classes.content}>
            {isMainPagePath && (
              <User user={user} />
            )}
            <Typography className={classes.date}>{changeFormatDate(createdAt)}</Typography>
            <Typography className={classes.text}>{content}</Typography>
          </Box>
        </Box>
        <Tag tags={tags} />
        <ButtonGroup className={classes.buttons}>
          {isUserProfile && (
            <Button
              onClick={handleEditPost}
              variant="contained"
            >
              edit
            </Button>
          )}
          {(isUserProfile || (!isMainPagePath && isAdmin)) && (
            <LoadingButton
              onClick={handleDeletePost}
              variant="contained"
              color={isAdmin ? 'error' : 'primary'}
              loading={isLoading && postId === id}
            >
              <Delete />
            </LoadingButton>
          )}
          {isAuth && (
            <Button
              onClick={handleShowComments}
              variant="contained"
            >
              comments
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </ListItem>
  );
};

export default memo(PostCard);
