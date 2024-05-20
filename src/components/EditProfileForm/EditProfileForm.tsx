import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editProfileRequested } from '../../redux/actions/user';
import { EditProfileFormData } from '../../interfaces/user';
import { createRequestEditProfile } from '../../helpers';
import Loader from '../Loader';

import classes from './EditProfileForm.module.scss';
import editProfileSchema from './editProfileSchema';

const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.currentUser.error);
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const login = useAppSelector(state => state.auth.authUser?.login);
  const [inputError, setInputError] = useState('');

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(editProfileSchema)
  });

  const image = watch('imageUser');
  const isImageUploaded = image instanceof FileList && image.length > 0;

  const onSubmit: SubmitHandler<EditProfileFormData> = (data: EditProfileFormData) => {
    if (data.login === login && !isImageUploaded) {
      setInputError('The data has not changed');
    } else {
      dispatch(editProfileRequested(createRequestEditProfile(data)));
    }
  };

  const isLoginError = errors.login?.message !== undefined;

  const textButton = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
      <TextField
        type="text"
        label="Login"
        fullWidth
        margin="normal"
        defaultValue={login}
        {...register('login')}
      />
      <p className={classes.error}>{errors.login?.message}</p>
      <div className={classes.buttons}>
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          color={color}
          className={classes.button}
        >
          {textButton}
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.gif"
            className={classes.hiddenInput}
            {...register('imageUser')}
          />
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoginError}
          className={classes.button}
        >
          {isLoading ? <Loader /> : 'Save changes'}
        </Button>
      </div>
      <p className={classes.error}>{error}</p>
      <p className={classes.error}>{inputError}</p>
    </form>
  );
};

export default EditProfileForm;
