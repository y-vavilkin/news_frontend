import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

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
    <>
      <Link to={`/users/${userId}`}>
        <img
          className={classes.avatar}
          src={getImageUrlWithBase(userAvatar, USER)}
          alt="Profile"
        />
      </Link>
      <Button
        color="success"
        variant="contained"
        onClick={handlerLogout}
      >
        logout
      </Button>
    </>
  );
};

export default UserMenu;
