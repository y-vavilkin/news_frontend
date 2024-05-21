import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addPostRequested } from '../../redux/actions/user';
import { AddPostFormData, PostRequest } from '../../interfaces/user';

import { addPostSchema } from './profileFormSchema';
import classes from './UserPagesForms.module.scss';

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const errorOfRequest = useAppSelector(state => state.currentUser.error);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(addPostSchema)
  });

  const image = watch('imagePost');
  const isImageUploaded = image instanceof FileList && image.length > 0;

  const isContentError = errors.content?.message !== undefined;
  const isTitleError = errors.title?.message !== undefined;
  const isTagsError = errors.tags?.message !== undefined;
  const isAddPostError = isTitleError || isContentError || isTagsError;

  const textButtonImage = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

  const onSubmit: SubmitHandler<AddPostFormData> = (data: AddPostFormData) => {
    if (data.imagePost instanceof FileList && data.imagePost.length > 0) {
      data.imagePost = data.imagePost[0];
    } else {
      delete data.imagePost;
    }
    dispatch(addPostRequested(data as PostRequest));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
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
            {...register('imagePost')}
          />
        </Button>
        <LoadingButton
          type="submit"
          color="primary"
          loading={isLoading}
          variant="contained"
          disabled={isAddPostError}
          className={classes.button}
        >
          Create post
        </LoadingButton>
      </div>
      <p className={classes.error}>{errorOfRequest}</p>
    </form>
  );
};

export default AddPostForm;
