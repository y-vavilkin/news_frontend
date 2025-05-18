import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, FormControl, FormLabel, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { EditProfileFormData, EditProfileRequest } from '../../interfaces/user';
import { editProfileRequested } from '../../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { editProfileSchema } from './profileFormSchema';
import classes from './UserPagesForms.module.scss';

const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const [errorOfInput, setErrorOfInput] = useState('');
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const errorOfRequest = useAppSelector(state => state.currentUser.error);
  const login = useAppSelector(state => state.auth.authUser?.login);
  const typeModal = useAppSelector(state => state.modal.type);

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

  const hasLoginError = errors.login?.message !== undefined;

  const textButtonImage = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

  const onSubmit: SubmitHandler<EditProfileFormData> = (data: EditProfileFormData) => {
    if (data.login === login && !isImageUploaded) {
      setErrorOfInput('The data has not changed');
    } else {
      if (data.imageUser instanceof FileList && data.imageUser.length > 0) {
        data.imageUser = data.imageUser[0];
      } else {
        data.imageUser = null;
      }
      dispatch(editProfileRequested(data as EditProfileRequest));
    }
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.box}
      sx={{ p: 2 }}
    >
      <FormLabel>{typeModal?.toUpperCase()}</FormLabel>
      <TextField
        data-testid="Login"
        type="text"
        label="Login"
        fullWidth
        margin="normal"
        defaultValue={login}
        {...register('login')}
      />
      <Typography className={classes.error}>{errors.login?.message}</Typography>
      <Stack direction="row" className={classes.buttons}>
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
          data-testid="save-changes-button"
          type="submit"
          color="primary"
          loading={isLoading}
          variant="contained"
          disabled={hasLoginError}
          className={classes.button}
        >
          Save changes
        </LoadingButton>
      </Stack>
      <Typography className={classes.error}>{errorOfRequest}</Typography>
      <Typography className={classes.error}>{errorOfInput}</Typography>
    </FormControl>
  );
};

export default EditProfileForm;
