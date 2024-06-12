import { Avatar, Divider, ListItem, ListItemAvatar, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';

import { changeFormatDate, getImageUrlWithBase } from '../../helpers';
import { User } from '../../interfaces/user';
import { USER } from '../../constants';

import classes from './Comment.module.scss';

export interface CommentProps {
  id: number
  text: string
  updatedAt: string
  user: User
  isVisibleActions: boolean
}

const Comment = ({ text, user, updatedAt, isVisibleActions }: CommentProps) => {
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
        <Typography className={classes.text}>{changeFormatDate(updatedAt)}</Typography>
        <Stack direction="row">
          {isVisibleActions && (<>
            <LoadingButton variant="contained">
              edit
            </LoadingButton>
            <LoadingButton variant="contained">
              delete
            </LoadingButton>
          </>)}
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default Comment;
