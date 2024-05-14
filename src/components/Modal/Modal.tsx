import { Modal, Box } from '@mui/material';

import * as actionTypes from '../../redux/actions/actionTypes/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/actions/modal';
import { ADD_POST } from '../../constants';
import AddPostForm from '../AddPostForm';
import SignUpForm from '../SignUpForm';
import SignInForm from '../SignInForm';

import classes from './Modal.module.scss';

const CustomModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  const typeModal = useAppSelector(state => state.modal.type);
  const isRegistration = typeModal === actionTypes.AUTH_USER_REGISTRATION;
  const isLogin = typeModal === actionTypes.AUTH_USER_LOGIN;
  const isAddPost = typeModal === ADD_POST;

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      className={classes.modal}
    >
      <Box>
        {isRegistration && (
          <SignUpForm />
        )}
        {isLogin && (
          <SignInForm />
        )}
        {isAddPost && (
          <AddPostForm />
        )}
      </Box>
    </Modal>
  );
};

export default CustomModal;
