import { Button } from '@mui/material';

import { authUserReset } from '../../redux/actions/auth';
import { openModal } from '../../redux/actions/modal';
import { useAppDispatch } from '../../redux/hooks';
import { TypeModal } from '../../interfaces/modal';

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
