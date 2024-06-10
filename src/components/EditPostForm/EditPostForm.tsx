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
import { useAppDispatch, useAppSelector, usePost } from '../../hooks';
import { editPostRequested } from '../../redux/actions/user';

import { editPostSchema } from './postFormSchema';
import classes from './EditPostForm.module.scss';

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.currentUser.isLoadingModal);
  const errorOfRequest = useAppSelector(state => state.currentUser.error);
  const typeModal = useAppSelector(state => state.modal.type);
  const postId = useAppSelector(state => state.currentUser.postId);
  const [title, content, tags] = usePost(postId);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(editPostSchema)
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
    dispatch(editPostRequested(data as PostRequest));
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
        type="text"
        label="Title"
        fullWidth
        margin="normal"
        defaultValue={title}
        {...register('title')}
      />
      <Typography className={classes.error}>{errors.title?.message}</Typography>
      <TextField
        type="text"
        label="Content"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        defaultValue={content}
        {...register('content')}
      />
      <Typography className={classes.error}>{errors.content?.message}</Typography>
      <TextField
        type="text"
        label="Tags"
        fullWidth
        margin="normal"
        placeholder="Use more than one: `,`"
        defaultValue={tags}
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
          type="submit"
          color="primary"
          loading={isLoading}
          variant="contained"
          disabled={hasAddPostError}
          className={classes.button}
        >
          edit post
        </LoadingButton>
      </Stack>
      <Typography className={classes.error}>{errorOfRequest}</Typography>
    </FormControl>
  );
};

export default AddPostForm;
