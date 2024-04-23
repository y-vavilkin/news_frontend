import { Modal, Button, TextField, Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { REGISTRATION } from '../../redux/actionTypes';
import { closeModal } from '../../redux/actions/modal';

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
      <Box className={classes.box} >
        {typeModal === REGISTRATION && (
          <TextField
            label="Login"
            variant="outlined"
            margin='normal'
          />
        )}
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          margin='normal'
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          margin='normal'
          className={classes.input}
        />
        <div>
          <Button style={{ margin: '10px' }} onClick={handleClose} variant="outlined">cancel</Button>
          <Button className={classes.button} style={{ margin: '10px' }} variant="contained">continue</Button>
        </div>
      </Box>
    </Modal>

  );
};

export default CustomModal;
