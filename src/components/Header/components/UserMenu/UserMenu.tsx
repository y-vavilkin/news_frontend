import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

import placeHolderAvatar from '../../../../assets/placeholderAvatar.webp';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { authLogout } from '../../../../redux/actions/auth';
import { TOKEN } from '../../../../constants';

import classes from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => state.auth.authUser?.id);
  const userAvatar = useAppSelector((state) => state.auth.authUser?.avatarUrl);

  const handlerLogout = () => {
    localStorage.removeItem(TOKEN);
    dispatch(authLogout());
    navigate('/');
  };

  return (
    <>
      <Link to={`/users/${userId}`}>
        <img
          className={classes.avatar}
          src={userAvatar ?? placeHolderAvatar}
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
