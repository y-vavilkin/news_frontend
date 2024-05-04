import { Modal, Box } from '@mui/material';

import * as actionTypes from '../../redux/actions/actionTypes/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/actions/modal';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import classes from './Modal.module.scss';

const CustomModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  const typeModal = useAppSelector(state => state.modal.type);

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
        {
          typeModal === actionTypes.AUTH_USER_REGISTRATION && (
            <SignUpForm />
          )
        }
        {
          typeModal === actionTypes.AUTH_USER_LOGIN && (
            <SignInForm />
          )
        }
      </Box>
    </Modal>
  );
};

export default CustomModal;
