import { Edit, Add } from '@mui/icons-material';
import { Button } from '@mui/material';

import placeholderAvatar from '../../assets/placeholderAvatar.webp';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { User as UserDescription } from '../../interfaces/user';
import { openModal } from '../../redux/actions/modal';
import { ADD_POST } from '../../constants';

import classes from './UserCard.module.scss';

interface UserCardProps {
  id: number
  dataUser: UserDescription
}

const UserCard = ({ id, dataUser }: UserCardProps) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.auth.authUser?.id);

  const handlerAddPost = () => {
    dispatch(openModal(ADD_POST));
  };

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
          <Button variant="contained" startIcon={<Add />} onClick={handlerAddPost}>Add Post</Button>
          <Button variant="contained" startIcon={<Edit />}>Edit Profile</Button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
