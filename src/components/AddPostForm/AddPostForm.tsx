import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';

import { addPostRequested } from '../../redux/actions/user';
import { AddPostFormData } from '../../interfaces/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createRequestAddPost } from '../../helpers';

import classes from './AddPostForm.module.scss';
import addPostSchema from './addPostSchema';

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.currentUser.error);

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

  const onSubmit: SubmitHandler<AddPostFormData> = (data: AddPostFormData) => {
    dispatch(addPostRequested(createRequestAddPost(data)));
  };

  const isTitleError = errors.title?.message !== undefined;
  const isContentError = errors.content?.message !== undefined;
  const isTagsError = errors.tags?.message !== undefined;

  const textButton = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

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
        placeholder='Use more than one: `,`'
        {...register('tags')}
      />
      <p className={classes.error}>{errors.tags?.message}</p>
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
          accept="image/*"
          className={classes.hiddenInput}
          {...register('imagePost')}
        />
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isTitleError || isContentError || isTagsError}
        className={classes.button}
      >
        Add Post
      </Button>
      <p className={classes.error}>{error}</p>
    </form>
  );
};

export default AddPostForm;
