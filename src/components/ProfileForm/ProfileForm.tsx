import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

import { addPostRequested, editProfileRequested } from '../../redux/actions/user';
import { AddPostFormData, EditProfileFormData } from '../../interfaces/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ADD_POST, EDIT_PROFILE } from '../../constants';
import { TypeModal } from '../../interfaces/modal';
import { createRequest } from '../../helpers';

import { addPostSchema, editProfileSchema } from './profileFormSchema';
import classes from './ProfileForm.module.scss';

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const [errorOfInput, setErrorOfInput] = useState('');
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const errorOfRequest = useAppSelector(state => state.currentUser.error);
  const login = useAppSelector(state => state.auth.authUser?.login);
  const isAddPostForm = useAppSelector(state => state.modal.type) === TypeModal.ADD_POST;

  const formSchema = isAddPostForm ? addPostSchema : editProfileSchema;

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const typeOfRequestImage = isAddPostForm ? 'imagePost' : 'imageUser';
  const image = watch(typeOfRequestImage);
  const isImageUploaded = image instanceof FileList && image.length > 0;

  const isContentError = errors.content?.message !== undefined;
  const isTitleError = errors.title?.message !== undefined;
  const isTagsError = errors.tags?.message !== undefined;
  const isLoginError = errors.login?.message !== undefined;
  const isAddPostError = isTitleError || isContentError || isTagsError;

  const textButtonSubmit = isAddPostForm ? 'Create post' : 'Save changes';
  const textButtonImage = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

  const onSubmit: SubmitHandler<AddPostFormData | EditProfileFormData> =
  (data: AddPostFormData | EditProfileFormData) => {
    if (isAddPostForm) {
      dispatch(addPostRequested(createRequest(data, ADD_POST)));
    } else {
      if ((data as EditProfileFormData).login === login && !isImageUploaded) {
        setErrorOfInput('The data has not changed');
      } else {
        dispatch(editProfileRequested(createRequest(data, EDIT_PROFILE)));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
      {isAddPostForm &&
      <>
        <TextField
          type="text"
          label="Title"
          fullWidth
          margin="normal"
          {...register('title')}
        />
        <p className={classes.error}>{errors.title?.message}</p>
        <TextField
          type="text"
          label="Content"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register('content')}
        />
        <p className={classes.error}>{errors.content?.message}</p>
        <TextField
          type="text"
          label="Tags"
          fullWidth
          margin="normal"
          placeholder="Use more than one: `,`"
          {...register('tags')}
        />
        <p className={classes.error}>{errors.tags?.message}</p>
      </>
      }
      {!isAddPostForm &&
      <>
        <TextField
          type="text"
          label="Login"
          fullWidth
          margin="normal"
          defaultValue={login}
          {...register('login')}
        />
        <p className={classes.error}>{errors.login?.message}</p>
      </>
      }
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
            {...register(typeOfRequestImage)}
          />
        </Button>
        {isLoading &&
          <LoadingButton
            loading
            variant="contained"
            className={classes.button}
          />}
        {!isLoading &&
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isAddPostForm ? isAddPostError : isLoginError}
            className={classes.button}
          >
            {textButtonSubmit}
          </Button>
        }
      </div>
      <p className={classes.error}>{errorOfRequest}</p>
      <p className={classes.error}>{errorOfInput}</p>
    </form>
  );
};

export default ProfileForm;
