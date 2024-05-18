import { Link } from 'react-router-dom';

import { type User as UserDescription } from '../../interfaces/user';
import { getImageUrlWithBase } from '../../utils';
import { useAppSelector } from '../../redux/hooks';
import { USER } from '../../constants';

import classes from './User.module.scss';

interface UserProps {
  user: UserDescription
}

const User = ({ user }: UserProps) => {
  const isOnline = useAppSelector(state => state.auth.isOnline);

  return (
    <div className={classes.user}>
      <img
        className={classes.avatar}
        src={getImageUrlWithBase(user.avatarUrl, USER)}
        alt="avatar"
        draggable="false"
      />
      <div className={classes.info}>
        {isOnline && (
          <Link className={classes.link} to={`users/${user.id}`}>
            <p>{user.login}</p>
          </Link>
        )}
        {!isOnline && (
          <p>{user.login}</p>
        )}
      </div>
    </div>
  );
};

export default User;
