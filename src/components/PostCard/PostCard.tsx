import { Box, Button, ListItem, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { memo } from 'react';

import { changeFormatDate, getImageUrlWithBase } from '../../helpers';
import { User as UserDescription } from '../../interfaces/user';
import { Tag as TagDescription } from '../../interfaces/posts';
import { deletePostRequested, setIdPost } from '../../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { openModal } from '../../redux/actions/modal';
import { TypeModal } from '../../interfaces/modal';
import { CARD } from '../../constants';
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
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { id: userUrlId } = useParams();
  const postId = useAppSelector(state => state.currentUser.postId);
  const isLoading = useAppSelector(state => state.currentUser.isLoadingPost);
  const userId = useAppSelector(state => state.auth.authUser?.id);

  const isMainPagePath = location.pathname === '/';
  const isUserProfile = userId === Number(userUrlId);

  const handleDeletePost = () => {
    dispatch(deletePostRequested(Number(id)));
  };

  const handleEditPost = () => {
    dispatch(setIdPost(id));
    dispatch(openModal(TypeModal.EDIT_POST));
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
        {!isMainPagePath && isUserProfile && (
          <Box className={classes.buttons}>
            <Button
              onClick={handleEditPost}
              variant="contained"
              className={classes.button}
            >
              edit
            </Button>
            <LoadingButton
              onClick={handleDeletePost}
              variant="contained"
              className={classes.button}
              loading={isLoading && postId === id}
            >
              <Delete />
            </LoadingButton>
          </Box>
        )}
      </Box>
    </ListItem>
  );
};

export default memo(PostCard);
