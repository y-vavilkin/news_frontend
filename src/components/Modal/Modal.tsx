import { Modal, Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModal } from '../../redux/actions/modal';
import { selectForm } from '../../helpers';

import classes from './Modal.module.scss';

const CustomModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  const typeModal = useAppSelector(state => state.modal.type);
  const Form = selectForm(typeModal);

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
        <Form />
      </Box>
    </Modal>
  );
};

export default CustomModal;
