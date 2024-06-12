import { SubmitHandler, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { ChangeEvent } from 'react';

import { addCommentRequested, setInputText } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentData } from '../../interfaces/comments';

import { commentSchema } from './commentSchema';

const InputText = () => {
  const dispatch = useAppDispatch();
  const commentText = useAppSelector(state => state.comments.inputText);
  const error = useAppSelector(state => state.comments.error);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(commentSchema)
  });

  const inputError = errors.text?.message;
  const hasInputError = inputError !== undefined;

  const onChangeCommentText = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputText(event.target.value));
  };

  const onSubmit: SubmitHandler<CommentData> = (data: CommentData) => {
    dispatch(addCommentRequested(data));
  };

  return (
    <FormControl
      fullWidth
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        placeholder='Create comment'
        fullWidth
        multiline
        maxRows={3}
        value={commentText}
        {...register('text')}
        onChange={onChangeCommentText}
        error={!!hasInputError}
        helperText={inputError}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        color={error !== null ? 'error' : 'primary'}
      >
        {error ?? 'create'}
      </LoadingButton>
    </FormControl>
  );
};

export default InputText;
