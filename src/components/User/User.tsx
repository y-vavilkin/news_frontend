import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { type User as UserDescription } from '../../interfaces/user';
import { getImageUrlWithBase } from '../../helpers';
import { useAppSelector } from '../../hooks';
import { USER } from '../../constants';

import classes from './User.module.scss';

interface UserProps {
  user: UserDescription
}

const User = ({ user }: UserProps) => {
  const isOnline = useAppSelector(state => state.auth.isOnline);

  return (
    <Box className={classes.user}>
      <Avatar
        src={getImageUrlWithBase(user.avatarUrl, USER)}
        alt="avatar"
      />
      <Box className={classes.info}>
        {isOnline && (
          <Link className={classes.link} to={`users/${user.id}`}>
            <p>{user.login}</p>
          </Link>
        )}
        {!isOnline && (
          <p>{user.login}</p>
        )}
      </Box>
    </Box>
  );
};

export default User;
