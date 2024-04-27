import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { Auth, AuthPayload } from '../../../../interfaces/auth';
import { authResetError, authUser } from '../../../../redux/actions/auth';
import classes from '../../Modal.module.scss';
import signUpSchema from './signUpSchema';

const SignUpForm = () => {
  const dispatch = useAppDispatch();

  const typeModal = useAppSelector(state => state.modal.type);

  const authError = useAppSelector(state => state.auth.error);

  const onSubmit: SubmitHandler<AuthPayload> = (data: Auth) => {
    const authPayload: AuthPayload = {
      authData: {
        ...data,
        typeModal
      },
      error: null
    };
    dispatch(authUser(authPayload));
  };

  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const loginValue = watch('login');
  const passwordValue = watch('password');
  const emailValue = watch('email');

  useEffect(() => {
    if (authError !== null) {
      dispatch(authResetError());
    }
  }, [emailValue, loginValue, passwordValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
      <TextField
        type="login"
        label="Login"
        fullWidth
        margin="normal"
        {...register('login', { required: true })}
      />
      <p className={classes.error}>{errors.login?.message}</p>
      <TextField
        type="email"
        label="Email"
        fullWidth
        margin="normal"
        {...register('email', { required: true })}
      />
      <p className={classes.error}>{errors.email?.message}</p>
      <TextField
        type="password"
        label="Password"
        fullWidth
        margin="normal"
        {...register('password', { required: true })}
      />
      <p className={classes.error}>{errors.password?.message}</p>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!(authError == null)}
        style={{ marginTop: '20px' }}
      >
        Continue
      </Button>
    </form>
  );
};

export default SignUpForm;
