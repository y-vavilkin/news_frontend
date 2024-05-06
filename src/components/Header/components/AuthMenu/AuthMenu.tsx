import Button from '@mui/material/Button';

import { openModal } from '../../../../redux/actions/modal';
import { useAppDispatch } from '../../../../redux/hooks';
import {
  AUTH_USER_REGISTRATION,
  AUTH_USER_LOGIN
} from '../../../../redux/actions/actionTypes/auth';

const AuthMenu = () => {
  const dispatch = useAppDispatch();

  const handlerRegistration = () => {
    dispatch(openModal(AUTH_USER_REGISTRATION));
  };

  const handlerAuthorization = () => {
    dispatch(openModal(AUTH_USER_LOGIN));
  };

  return (
    <>
      <Button
        color="success"
        variant="contained"
        onClick={handlerRegistration}
      >
        sign up
      </Button>
      <Button
        variant="contained"
        onClick={handlerAuthorization}
      >
        sign in
      </Button>
    </>
  );
};

export default AuthMenu;
