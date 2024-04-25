import { Modal, Button, TextField, FormControl, Box } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { REGISTRATION } from '../../redux/actionTypes';
import { closeModal } from '../../redux/actions/modal';
import { authUser } from '../../redux/actions/auth';

import classes from './Modal.module.scss';

const CustomModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen);
  const typeModal = useAppSelector(state => state.modal.type);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const [userData, setUserData] = useState({
    login: '',
    email: '',
    password: ''
  });

  const [warning, setWarning] = useState({
    login: false,
    email: false,
    password: false
  });

  const handleContinue = () => {
    let isEmpty = false;

    if (userData.login === '') {
      setWarning(prevState => ({ ...prevState, login: true }));
      isEmpty = true;
    }

    if (userData.email === '') {
      setWarning(prevState => ({ ...prevState, email: true }));
      isEmpty = true;
    }

    if (userData.password === '') {
      setWarning(prevState => ({ ...prevState, password: true }));
      isEmpty = true;
    }

    if (isEmpty && typeModal === REGISTRATION) return;

    if (typeModal !== null) {
      const payload = { ...userData, typeModal };

      dispatch(authUser(payload));
    }

    handleClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
    setWarning(prevState => ({ ...prevState, [event.target.id]: false }));
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      className={classes.modal}
    >
      <Box className={classes.box} >
        <FormControl>
          {typeModal === REGISTRATION && (
            <TextField
              label="Login"
              variant="outlined"
              margin='normal'
              id='login'
              required
              value={userData.login}
              onChange={handleChange}
              error={warning.login}
              helperText={warning.login ? 'Required field' : ''}
            />
          )}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            margin='normal'
            id='email'
            required
            value={userData.email}
            onChange={handleChange}
            error={warning.email}
            helperText={warning.email ? 'Required field' : ''}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            margin='normal'
            id='password'
            required
            value={userData.password}
            onChange={handleChange}
            error={warning.password}
            helperText={warning.password ? 'Required field' : ''}
            className={classes.input}
          />
        </FormControl>
        <div>
          <Button style={{ margin: '10px' }} onClick={handleClose} variant="outlined">cancel</Button>
          <Button className={classes.button} style={{ margin: '10px' }} variant="contained" onClick={handleContinue}>continue</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
