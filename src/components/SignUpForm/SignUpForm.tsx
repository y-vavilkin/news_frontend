import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authUser } from '../../redux/actions/auth';
import { AuthForm } from '../../interfaces/auth';
import { REGISTRATION } from '../../constants';

import classes from './SignUpForm.module.scss';
import signUpSchema from './signUpSchema';

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector(state => state.auth.error);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit: SubmitHandler<AuthForm> = (data: AuthForm) => {
    dispatch(authUser(REGISTRATION, data));
  };

  const isLoginError = errors.login?.message !== undefined;
  const isEmailError = errors.email?.message !== undefined;
  const isPasswordError = errors.password?.message !== undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
      <TextField
        type="login"
        label="Login"
        fullWidth
        margin="normal"
        autoComplete="username"
        {...register('login', { required: true })}
      />
      <p className={classes.error}>{errors.login?.message}</p>
      <TextField
        type="email"
        label="Email"
        fullWidth
        margin="normal"
        autoComplete="email"
        {...register('email', { required: true })}
      />
      <p className={classes.error}>{errors.email?.message}</p>
      <TextField
        type="password"
        label="Password"
        fullWidth
        margin="normal"
        autoComplete="new-password"
        {...register('password', { required: true })}
      />
      <p className={classes.error}>{errors.password?.message}</p>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoginError || isEmailError || isPasswordError}
        className={classes.button}
      >
        Continue
      </Button>
      {authError !== null && (
        <p className={classes.error}>{authError}</p>
      )}
    </form>
  );
};

export default SignUpForm;
