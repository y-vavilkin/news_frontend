import { Button } from '@mui/material';

import { authUserReset } from '../../redux/actions/auth';
import { openModal } from '../../redux/actions/modal';
import { TypeModal } from '../../interfaces/modal';
import { useAppDispatch } from '../../hooks';

const AuthMenu = () => {
  const dispatch = useAppDispatch();

  const handlerAuth = (type: TypeModal) => {
    dispatch(authUserReset());
    dispatch(openModal(type));
  };

  return (
    <>
      <Button
        color="success"
        variant="contained"
        onClick={() => handlerAuth(TypeModal.REGISTRATION)}
      >
        sign up
      </Button>
      <Button
        variant="contained"
        onClick={() => handlerAuth(TypeModal.LOGIN)}
      >
        sign in
      </Button>
    </>
  );
};

export default AuthMenu;
