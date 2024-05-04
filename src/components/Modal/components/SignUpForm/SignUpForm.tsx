import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';

import { authReset, authUserRegistration } from '../../../../redux/actions/auth';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { AuthForm } from '../../../../interfaces/auth';
import classes from '../../Modal.module.scss';

import signUpSchema from './signUpSchema';

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector(state => state.auth.error);

  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit: SubmitHandler<AuthForm> = async (data: AuthForm) => {
    dispatch(authUserRegistration(data));
  };

  const loginValue = watch('login');
  const emailValue = watch('email');
  const passwordValue = watch('password');

  useEffect(() => {
    dispatch(authReset());
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
        disabled={authError !== null}
        style={{ marginTop: '20px' }}
      >
        Continue
      </Button>
      <p className={classes.error}>{authError}</p>
    </form>
  );
};

export default SignUpForm;
