import { Edit, Add } from '@mui/icons-material';
import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { User as UserDescription } from '../../interfaces/user';
import { addPostReset } from '../../redux/actions/user';
import { openModal } from '../../redux/actions/modal';
import { getImageUrlWithBase } from '../../helpers';
import { TypeModal } from '../../interfaces/modal';
import { USER } from '../../constants';

import classes from './UserCard.module.scss';

interface UserCardProps {
  id: number
  dataUser: UserDescription
}

const UserCard = ({ id, dataUser }: UserCardProps) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.auth.authUser?.id);

  const openAddPostModal = () => {
    dispatch(addPostReset());
    dispatch(openModal(TypeModal.ADD_POST));
  };

  return (
    <div className={classes.userDescription}>
      <img
        className={classes.avatar}
        src={getImageUrlWithBase(dataUser.avatarUrl, USER)}
        alt="Avatar"
      />
      <div className={classes.information}>
        <p>Login: {dataUser.login}</p>
        <p>Email: {dataUser.email}</p>
      </div>
      {id === userId && (
        <div className={classes.buttons}>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={openAddPostModal}
          >
            Add Post
          </Button>
          <Button
            variant="contained"
            startIcon={<Edit />}
          >
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
