import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  Stack,
  Typography
} from '@mui/material';

import { changeFormatDate, getImageUrlWithBase } from '../../helpers';
import { deleteCommentRequested, setCommentId } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { User } from '../../interfaces/user';
import { USER } from '../../constants';
import Loader from '../Loader';

import classes from './Comment.module.scss';

export interface CommentProps {
  id: number
  text: string
  updatedAt: string
  user: User
  isVisibleActions: boolean
}

const Comment = ({ id, text, user, updatedAt, isVisibleActions }: CommentProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.comments.isLoadingDelete);
  const commentId = useAppSelector(state => state.comments.commentId);

  const isCurrentComment = commentId === id;

  const handleDeleteComment = () => {
    dispatch(setCommentId(id));
    dispatch(deleteCommentRequested(id));
  };

  if (isLoading && isCurrentComment) return <Loader />;

  return (
    <ListItem className={classes.comment}>
      <Stack className={classes.content}>
        <Divider sx={{ m: 1 }} />
        <Stack className={classes.container} direction="row">
          <ListItemAvatar>
            <Avatar
              className={classes.userImage}
              src={getImageUrlWithBase(user.avatarUrl, USER)}
              alt="Avatar"
            />
          </ListItemAvatar>
          <Stack className={classes.userInfo}>
            <Link className={classes.link} to={`users/${user.id}`}>
              <Typography className={classes.text}>{user.login}</Typography>
            </Link>
            <Link className={classes.link} to={`users/${user.id}`}>
              <Typography className={classes.text}>{user.email}</Typography>
            </Link>
          </Stack>
        </Stack>
        <Typography className={classes.text}>{text}</Typography>
        <Stack direction="row" className={classes.actions}>
          {isVisibleActions && (<>
            <IconButton onClick={handleDeleteComment}>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <Edit />
            </IconButton>
          </>)}
          <Typography className={classes.text}>{changeFormatDate(updatedAt)}</Typography>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default memo(Comment);
