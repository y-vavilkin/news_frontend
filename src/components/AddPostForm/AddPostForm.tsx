import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';

import createRequestAddPost from '../../helpers/createRequestAddPost';
import { addPostRequested } from '../../redux/actions/user';
import { AddPostFormData } from '../../interfaces/user';
import { useAppDispatch } from '../../redux/hooks';

import classes from './AddPostForm.module.scss';
import addPostSchema from './addPostSchema';

const AddPostForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    resolver: yupResolver(addPostSchema)
  });

  const image = watch('image');
  const isImageUploaded = image instanceof FileList && image.length > 0;

  const onSubmit: SubmitHandler<AddPostFormData> = (data: AddPostFormData) => {
    dispatch(addPostRequested(createRequestAddPost(data)));
  };

  const isTitleError = errors.title?.message !== undefined;
  const isContentError = errors.content?.message !== undefined;
  const isTagsError = errors.tags?.message !== undefined;

  const color = isImageUploaded
    ? 'success'
    : 'primary';

  const textButton = isImageUploaded
    ? 'thanks'
    : 'upload file';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.box}>
      <TextField
        type="text"
        label="Title"
        fullWidth
        margin="normal"
        {...register('title', { required: true })}
      />
      <p className={classes.error}>{errors.title?.message}</p>
      <TextField
        type="text"
        label="Content"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        {...register('content', { required: true })}
      />
      <p className={classes.error}>{errors.content?.message}</p>
      <TextField
        type="text"
        label="Tags"
        placeholder='Use more than one: `,`'
        fullWidth
        margin="normal"
        {...register('tags', { required: true })}
      />
      <p className={classes.error}>{errors.tags?.message}</p>
      <Button
        component="label"
        role={undefined}
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
          {...register('image', { required: false })}
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
    </form>
  );
};

export default AddPostForm;
