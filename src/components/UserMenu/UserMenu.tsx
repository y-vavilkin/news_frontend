import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { authLogout } from '../../redux/actions/auth';
import { getImageUrlWithBase } from '../../helpers';
import { USER } from '../../constants';

import classes from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => state.auth.authUser?.id);
  const userAvatar = useAppSelector((state) => state.auth.authUser?.avatarUrl ?? null);

  const handlerLogout = () => {
    dispatch(authLogout());
    navigate('/');
  };

  return (
    <Stack direction="row" spacing={2}>
      <Link to={`/users/${userId}`} className={classes.avatarLink}>
        <Avatar
          src={getImageUrlWithBase(userAvatar, USER)}
          alt="Profile"
          sx={{ width: 50, height: 50 }}
        />
      </Link>
      <Button
        data-testid="logout-button"
        color="success"
        variant="contained"
        onClick={handlerLogout}
      >
        logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
