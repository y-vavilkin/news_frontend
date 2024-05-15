import { Modal, Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/actions/modal';
import selectForm from '../../helpers/selectForm';

import classes from './Modal.module.scss';

const CustomModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  const typeModal = useAppSelector(state => state.modal.type);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const Form = selectForm(typeModal);

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      className={classes.modal}
    >
      <Box>
        {Form !== null ? <Form /> : null}
      </Box>
    </Modal>
  );
};

export default CustomModal;
