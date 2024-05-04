import { Link } from 'react-router-dom';

import { type User as UserDescription } from '../../../../interfaces/auth';
import placeholderAvatar from '../../../../assets/placeholderAvatar.webp';
import { useAppSelector } from '../../../../redux/hooks';
import { changeFormatDate } from '../../../../helpers';

import classes from './User.module.scss';

interface UserProps {
  user: UserDescription
  createdAt: string
}

const User = ({ user, createdAt }: UserProps) => {
  const isOnline = useAppSelector(state => state.auth.isOnline);
  return (
    <div className={classes.user}>
      <img
        className={classes.avatar}
        src={user.avatarUrl ?? placeholderAvatar}
        alt="avatar"
        draggable="false"
      />
      <div className={classes.info}>
        {isOnline && (
          <Link className={classes.link} to={`users/${user.id}`}><p>{user.login}</p></Link>
        )}
        {!isOnline && (
          <p>{user.login}</p>
        )}
        <p>{changeFormatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default User;
