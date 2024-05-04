import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import * as actionTypes from '../../redux/actions/actionTypes/auth';
import placeHolderAvatar from '../../assets/placeholderAvatar.webp';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { openModal } from '../../redux/actions/modal';
import { authReset } from '../../redux/actions/auth';
import logo from '../../assets/world-news.webp';
import { TOKEN } from '../../constants';

import classes from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isOnline = useAppSelector((state) => state.auth.isOnline);
  const userAvatar = useAppSelector((state) => state.auth.user?.avatarUrl);
  const userId = useAppSelector((state) => state.auth.user?.id);

  const handlerRegistration = () => {
    dispatch(openModal(actionTypes.AUTH_USER_REGISTRATION));
  };

  const handlerAuthorization = () => {
    dispatch(openModal(actionTypes.AUTH_USER_LOGIN));
  };

  const handlerLogout = () => {
    localStorage.removeItem(TOKEN);
    dispatch(authReset());
    navigate('/');
  };

  return (
    <div className={classes.header}>
      <Link to='/' className={classes.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <p>News</p>
      <div className={classes.links}>
        {
          !isOnline && (
            <>
              <Button color="success" variant="contained" onClick={handlerRegistration}>sign up</Button>
              <Button variant="contained" onClick={handlerAuthorization}>sign in</Button>
            </>
          )
        }
        {
          isOnline && (
            <>
              <Link to={`/users/${userId}`}>
                <img className={classes.avatar} src={userAvatar ?? placeHolderAvatar} alt="Profile" />
              </Link>
              <Button color="success" variant="contained" onClick={handlerLogout}>logout</Button>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Header;
