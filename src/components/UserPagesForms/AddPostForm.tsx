import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Stack
} from '@mui/material';

import { PostFormData, PostRequest } from '../../interfaces/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addPostRequested } from '../../redux/actions/user';

import { addPostSchema } from './profileFormSchema';
import classes from './UserPagesForms.module.scss';

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const errorOfRequest = useAppSelector(state => state.currentUser.error);
  const typeModal = useAppSelector(state => state.modal.type);

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

  const hasContentError = errors.content?.message !== undefined;
  const hasTitleError = errors.title?.message !== undefined;
  const hasTagsError = errors.tags?.message !== undefined;
  const hasAddPostError = hasContentError || hasTitleError || hasTagsError;

  const textButtonImage = isImageUploaded ? 'thanks' : 'upload file';
  const color = isImageUploaded ? 'success' : 'primary';

  const onSubmit: SubmitHandler<PostFormData> = (data: PostFormData) => {
    if (data.imagePost instanceof FileList && data.imagePost.length > 0) {
      data.imagePost = data.imagePost[0];
    } else {
      data.imagePost = null;
    }
    dispatch(addPostRequested(data as PostRequest));
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
        data-testid="Title"
        type="text"
        label="Title"
        fullWidth
        margin="normal"
        {...register('title')}
      />
      <Typography className={classes.error}>{errors.title?.message}</Typography>
      <TextField
        data-testid="Content"
        type="text"
        label="Content"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        {...register('content')}
      />
      <Typography className={classes.error}>{errors.content?.message}</Typography>
      <TextField
        data-testid="Tags"
        type="text"
        label="Tags"
        fullWidth
        margin="normal"
        placeholder="Use more than one: `,`"
        {...register('tags')}
      />
      <Typography className={classes.error}>{errors.tags?.message}</Typography>
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
            {...register('imagePost')}
          />
        </Button>
        <LoadingButton
          data-testid="create-post-button"
          type="submit"
          color="primary"
          loading={isLoading}
          variant="contained"
          disabled={hasAddPostError}
          className={classes.button}
        >
          Create post
        </LoadingButton>
      </Stack>
      <Typography className={classes.error}>{errorOfRequest}</Typography>
    </FormControl>
  );
};

export default AddPostForm;
