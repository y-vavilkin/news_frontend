import { SubmitHandler, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';

import { CREATE, ERROR, NEW_COMMENT, PRIMARY } from '../../constants';
import { addCommentRequested } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentData } from '../../interfaces/comments';

import { commentSchema } from './commentSchema';

const CommentInput = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.comments.error);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      text: ''
    }
  });

  const inputError = errors.text?.message;
  const hasInputError = inputError !== undefined;

  const onSubmit: SubmitHandler<CommentData> = (data: CommentData) => {
    dispatch(addCommentRequested(data));
    setValue('text', '');
  };

  return (
    <FormControl
      fullWidth
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        placeholder={inputError ?? NEW_COMMENT}
        fullWidth
        {...register('text')}
        error={!!hasInputError}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        color={error !== null ? ERROR : PRIMARY}
      >
        {error ?? CREATE}
      </LoadingButton>
    </FormControl>
  );
};

export default CommentInput;
