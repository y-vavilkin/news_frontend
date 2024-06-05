import { Button, IconButton, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GoogleIcon from '@mui/icons-material/Google';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AuthFormData } from '../../interfaces/auth';
import { authUser } from '../../redux/actions/auth';
import { TypeModal } from '../../interfaces/modal';

import classes from './AuthForm.module.scss';
import authFormSchema from './authFormSchema';

const AuthForm = () => {
  const dispatch = useAppDispatch();

  const authError = useAppSelector(state => state.auth.error);
  const typeAuth = useAppSelector(state => state.modal.type);
  const isLogin = typeAuth === TypeModal.LOGIN;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(authFormSchema)
  });

  const onSubmit: SubmitHandler<AuthFormData> = (data: AuthFormData) => {
    dispatch(authUser(data));
  };

  const authByGoogle = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_AUTH_URL;
  };

  const isLoginError = errors.login?.message !== undefined;
  const isEmailError = errors.email?.message !== undefined;
  const isPasswordError = errors.password?.message !== undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
      {!isLogin && (
        <>
          <TextField
            type="login"
            label="Login"
            fullWidth
            margin="normal"
            autoComplete="username"
            {...register('login')}
          />
          <p className={classes.error}>{errors.login?.message}</p>
        </>
      )}
      <TextField
        type="email"
        label="Email"
        fullWidth
        margin="normal"
        autoComplete="email"
        {...register('email')}
      />
      <p className={classes.error}>{errors.email?.message}</p>
      <TextField
        type="password"
        label="Password"
        fullWidth
        margin="normal"
        autoComplete="new-password"
        {...register('password')}
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
      <IconButton color="primary" onClick={authByGoogle}>
        <GoogleIcon />
      </IconButton>
      {authError !== null && (
        <p className={classes.error}>{authError}</p>
      )}
    </form>
  );
};

export default AuthForm;
