import { Modal, Box } from '@mui/material';
import { useEffect } from 'react';

import { AUTHORIZATION, REGISTRATION } from '../../redux/actionTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/actions/modal';

import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import classes from './Modal.module.scss';

const CustomModal = () => {
  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  const typeModal = useAppSelector(state => state.modal.type);
  const isOnline = useAppSelector(state => state.status.userOnline);

  const handleClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(closeModal());
  }, [isOnline]);

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      className={classes.modal}
    >
      <Box>
        {typeModal === REGISTRATION && (
          <SignUpForm />
        )}
        {typeModal === AUTHORIZATION && (
          <SignInForm />
        )}
      </Box>
    </Modal>
  );
};

export default CustomModal;
