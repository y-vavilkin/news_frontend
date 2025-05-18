import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GoogleIcon from '@mui/icons-material/Google';
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  TextField,
  Box,
  Typography
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks';
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
    <FormControl
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.box}
      sx={{ p: 2 }}
    >
      <FormLabel>{typeAuth?.toUpperCase()}</FormLabel>
      {!isLogin && (
        <>
          <TextField
            placeholder="Login"
            type="login"
            label="Login"
            fullWidth
            margin="normal"
            autoComplete="username"
            {...register('login')}
          />
          <Typography className={classes.error}>{errors.login?.message}</Typography>
        </>
      )}
      <TextField
        placeholder="Email"
        type="email"
        label="Email"
        fullWidth
        margin="normal"
        autoComplete="email"
        {...register('email')}
      />
      <Typography className={classes.error}>{errors.email?.message}</Typography>
      <TextField
        placeholder="Password"
        type="password"
        label="Password"
        fullWidth
        margin="normal"
        autoComplete="new-password"
        {...register('password')}
      />
      <Typography className={classes.error}>{errors.password?.message}</Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoginError || isEmailError || isPasswordError}
        className={classes.button}
      >
        Continue
      </Button>
      <Box className={classes.buttons}>
        <IconButton color="primary" onClick={authByGoogle} className={classes.buttonAuth}>
          <GoogleIcon />
        </IconButton>
      </Box>
      {authError !== null && (
        <p className={classes.error}>{authError}</p>
      )}
    </FormControl>
  );
};

export default AuthForm;
