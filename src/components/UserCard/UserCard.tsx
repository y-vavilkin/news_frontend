import { Avatar, Box, Button, Stack } from '@mui/material';
import { Edit, Add } from '@mui/icons-material';
import { memo } from 'react';

import { addPostReset, editProfileReset } from '../../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { openModal } from '../../redux/actions/modal';
import { getImageUrlWithBase } from '../../helpers';
import { TypeModal } from '../../interfaces/modal';
import { USER } from '../../constants';

import classes from './UserCard.module.scss';

interface UserCardProps {
  id: number
  login: string
  email: string
  avatarUrl: string | null
  role: string
}

const UserCard = ({ id, login, email, avatarUrl, role }: UserCardProps) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.auth.authUser?.id);

  const openAddPostModal = () => {
    dispatch(addPostReset());
    dispatch(openModal(TypeModal.ADD_POST));
  };

  const openEditProfileModal = () => {
    dispatch(editProfileReset());
    dispatch(openModal(TypeModal.EDIT_PROFILE));
  };

  return (
    <Box className={classes.userDescription}>
      <Avatar
        src={getImageUrlWithBase(avatarUrl, USER)}
        alt="Avatar"
        sx={{ width: 60, height: 60 }}
      />
      <Stack className={classes.information}>
        <p>Role: {role.toUpperCase()}</p>
        <p>Login: {login}</p>
        <p>Email: {email}</p>
      </Stack>
      {id === userId && (
        <Box className={classes.buttons}>
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
            onClick={openEditProfileModal}
          >
            Edit Profile
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default memo(UserCard);
