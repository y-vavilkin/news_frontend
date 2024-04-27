import { Button } from '@mui/material';

import { AUTHORIZATION, REGISTRATION } from '../../redux/actionTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateUserStatus } from '../../redux/actions/update';
import { openModal } from '../../redux/actions/modal';
import logo from '../../assets/world-news.webp';
import { TOKEN } from '../../constants';

import classes from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();

  const isUserOnline = useAppSelector((state) => state.status.userOnline);

  const handlerRegistration = () => {
    dispatch(openModal(REGISTRATION));
  };

  const handlerAuthorization = () => {
    dispatch(openModal(AUTHORIZATION));
  };

  const handlerLogout = () => {
    localStorage.removeItem(TOKEN);
    dispatch(updateUserStatus(false));
  };

  return (
    <div className={classes.header}>
      <a href='/' className={classes.logo}>
        <img src={logo} alt="logo" />
      </a>
      <p>News</p>
      <div className={classes.links}>
        {!isUserOnline && (
          <>
            <Button color="success" variant="contained" onClick={handlerRegistration}>sign up</Button>
            <Button variant="contained" onClick={handlerAuthorization}>sign in</Button>
          </>
        )}
        {isUserOnline && (
          <Button color="success" variant="contained" onClick={handlerLogout}>logout</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
