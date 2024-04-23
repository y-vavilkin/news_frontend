import { Button } from '@mui/material';

import { AUTHORIZATION, REGISTRATION } from '../../redux/actionTypes';
import { openModal } from '../../redux/actions/modal';
import { useAppDispatch } from '../../redux/hooks';
import logo from '../../assets/world-news.webp';

import classes from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();

  const handlerRegistration = () => {
    dispatch(openModal(REGISTRATION));
  };

  const handlerAuthorization = () => {
    dispatch(openModal(AUTHORIZATION));
  };

  return (
    <div className={classes.header}>
      <a href='/' className={classes.logo}>
        <img src={logo} alt="logo" />
      </a>
      <p>News</p>
      <div className={classes.links}>
        <Button color="success" variant="contained" href="#auth/registration" onClick={handlerRegistration}>sign up</Button>
        <Button variant="contained" href="#auth/login" onClick={handlerAuthorization}>sign in</Button>
      </div>
    </div>
  );
};

export default Header;
