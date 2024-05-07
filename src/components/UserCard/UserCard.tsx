import { Edit, Add } from '@mui/icons-material';
import { Button } from '@mui/material';

import placeholderAvatar from '../../assets/placeholderAvatar.webp';
import { User as UserDescription } from '../../interfaces/user';
import { useAppSelector } from '../../redux/hooks';

import classes from './UserCard.module.scss';

interface UserCardProps {
  id: number
  dataUser: UserDescription
}

const UserCard = ({ id, dataUser }: UserCardProps) => {
  const userId = useAppSelector(state => state.auth.authUser?.id);

  return (
    <div className={classes.userDescription}>
      <img
        className={classes.avatar}
        src={dataUser.avatarUrl ?? placeholderAvatar}
        alt="Avatar"
      />
      <div className={classes.information}>
        <p>Login: {dataUser.login}</p>
        <p>Email: {dataUser.email}</p>
      </div>
      {id === userId && (
        <div className={classes.buttons}>
          <Button variant="contained" startIcon={<Add />}>Add Post</Button>
          <Button variant="contained" startIcon={<Edit />}>Edit Profile</Button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
