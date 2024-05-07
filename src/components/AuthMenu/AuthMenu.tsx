import Button from '@mui/material/Button';

import { authUserReset } from '../../redux/actions/auth';
import { LOGIN, REGISTRATION } from '../../constants';
import { openModal } from '../../redux/actions/modal';
import { useAppDispatch } from '../../redux/hooks';

const AuthMenu = () => {
  const dispatch = useAppDispatch();

  const handlerAuth = (type: string) => {
    dispatch(authUserReset());
    dispatch(openModal(type));
  };

  return (
    <>
      <Button
        color="success"
        variant="contained"
        onClick={() => handlerAuth(REGISTRATION)}
      >
        sign up
      </Button>
      <Button
        variant="contained"
        onClick={() => handlerAuth(LOGIN)}
      >
        sign in
      </Button>
    </>
  );
};

export default AuthMenu;
