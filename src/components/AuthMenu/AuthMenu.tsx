import Button from '@mui/material/Button';

import { authUserReset } from '../../redux/actions/auth';
import { openModal } from '../../redux/actions/modal';
import { useAppDispatch } from '../../redux/hooks';
import {
  AUTH_USER_REGISTRATION,
  AUTH_USER_LOGIN
} from '../../redux/actions/actionTypes/auth';

const AuthMenu = () => {
  const dispatch = useAppDispatch();

  const handlerAuth = (type: string) => {
    console.log(type);
    dispatch(authUserReset());
    dispatch(openModal(type));
  };

  return (
    <>
      <Button
        color="success"
        variant="contained"
        onClick={() => { handlerAuth(AUTH_USER_REGISTRATION); }}
      >
        sign up
      </Button>
      <Button
        variant="contained"
        onClick={() => { handlerAuth(AUTH_USER_LOGIN); }}
      >
        sign in
      </Button>
    </>
  );
};

export default AuthMenu;
