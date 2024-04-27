import { changeFormatDate } from '../../../../helpers';
import { type User as UserDescription } from '../../../../interfaces';

import placeholderAvatar from './images/placeholderAvatar.webp';
import classes from './User.module.scss';

interface UserProps {
  user: UserDescription
  createdAt: string
}

const User = ({ user, createdAt }: UserProps) => {
  return (
    <div className={classes.user}>
      <img
        className={classes.avatar}
        src={user.avatarUrl ?? placeholderAvatar}
        alt="avatar"
        draggable="false"
      />
      <div className={classes.info}>
        <p>{user.login}</p>
        <p>{changeFormatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default User;
