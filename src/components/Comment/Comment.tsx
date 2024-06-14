import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { memo, useRef, useState } from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  Stack,
  Typography
} from '@mui/material';

import { deleteCommentRequested, setFetchCommentId } from '../../redux/actions/comments';
import { changeFormatDate, getImageUrlWithBase } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModal } from '../../redux/actions/modal';
import { User } from '../../interfaces/user';
import { ADMIN, USER } from '../../constants';
import ChangeComment from '../ChangeComment';
import Loader from '../Loader';

import classes from './Comment.module.scss';

export interface CommentProps {
  id: number
  text: string
  user: User
  updatedAt: string
  isVisibleActions: boolean
}

const Comment = ({ id, text, user, updatedAt, isVisibleActions }: CommentProps) => {
  const dispatch = useAppDispatch();
  const refCommentItem = useRef<HTMLLIElement | null>(null);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const isLoading = useAppSelector(state => state.comments.isLoadingComment);
  const role = useAppSelector(state => state.auth.authUser?.role);

  const isAdmin = role === ADMIN;

  const handleDeleteComment = () => {
    dispatch(setFetchCommentId(id));
    dispatch(deleteCommentRequested(id));
  };

  const handleEditComment = () => {
    setIsActive(true);
    setVisibility(!visibility);
    dispatch(setFetchCommentId(id));

    if (refCommentItem.current) {
      refCommentItem.current.focus();
    }
  };

  const resetBlur = () => {
    setIsActive(false);
    setVisibility(false);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (isLoading && isActive) return <Loader />;

  return (
    <ListItem className={classes.comment} ref={refCommentItem} onBlur={resetBlur}>
      <Stack className={classes.content}>
        <Divider sx={{ m: 1 }} />
        <Stack className={classes.container} direction="row">
          <ListItemAvatar>
            <Avatar
              className={classes.userImage}
              src={getImageUrlWithBase(user.avatarUrl, USER)}
              alt="Avatar"
              sx={{ width: 45, height: 45 }}
            />
          </ListItemAvatar>
          <Stack className={classes.userInfo}>
            <Link className={classes.link} to={`users/${user.id}`} onClick={handleCloseModal}>
              <Typography className={classes.text}>{user.login}</Typography>
            </Link>
            <Link className={classes.link} to={`users/${user.id}`} onClick={handleCloseModal}>
              <Typography className={classes.text}>{user.email}</Typography>
            </Link>
          </Stack>
        </Stack>
        {isVisibleActions && visibility
          ? <ChangeComment changeVisibility={setVisibility} />
          : <Typography className={classes.text}>
            {text}
          </Typography>}
        <Stack direction="row" className={classes.actions}>
          {(isVisibleActions) &&
            (<Stack direction="row">
              <IconButton onClick={handleDeleteComment}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleEditComment}>
                <Edit />
              </IconButton>
            </Stack>)}
          {(!isVisibleActions && isAdmin) && (
            <IconButton onClick={handleDeleteComment} color="error">
              <DeleteIcon />
            </IconButton>)}
          <Typography className={classes.text}>{changeFormatDate(updatedAt)}</Typography>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default memo(Comment);
