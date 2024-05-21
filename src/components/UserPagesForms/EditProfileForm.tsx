import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editProfileRequested } from '../../redux/actions/user';
import { EditProfileFormData, EditProfileRequest } from '../../interfaces/user';

import { editProfileSchema } from './profileFormSchema';
import classes from './UserPagesForms.module.scss';

const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const [errorOfInput, setErrorOfInput] = useState('');
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const errorOfRequest = useAppSelector(state => state.currentUser.error);
  const login = useAppSelector(state => state.auth.authUser?.login);

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

  const isLoginError = errors.login?.message !== undefined;

  const textButtonImage = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

  const onSubmit: SubmitHandler<EditProfileFormData> = (data: EditProfileFormData) => {
    if (data.login === login && !isImageUploaded) {
      setErrorOfInput('The data has not changed');
    } else {
      if (data.imageUser instanceof FileList && data.imageUser.length > 0) {
        data.imageUser = data.imageUser[0];
      } else {
        delete data.imageUser;
      }
      dispatch(editProfileRequested(data as EditProfileRequest));
    }
  };

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
          {textButtonImage}
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.gif"
            className={classes.hiddenInput}
            {...register('imageUser')}
          />
        </Button>
        <LoadingButton
          type="submit"
          color="primary"
          loading={isLoading}
          variant="contained"
          disabled={isLoginError}
          className={classes.button}
        >
          Save changes
        </LoadingButton>
      </div>
      <p className={classes.error}>{errorOfRequest}</p>
      <p className={classes.error}>{errorOfInput}</p>
    </form>
  );
};

export default EditProfileForm;
