import { SubmitHandler, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';

import { addCommentRequested, setInputText } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentData } from '../../interfaces/comments';
import { CREATE, NEW_COMMENT } from '../../constants';

import { commentSchema } from './commentSchema';

const CommentInput = () => {
  const dispatch = useAppDispatch();
  const commentText = useAppSelector(state => state.comments.inputTextForCreate);
  const error = useAppSelector(state => state.comments.error);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      text: commentText
    }
  });

  useEffect(() => {
    setValue('text', commentText);
  }, [commentText]);

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
        placeholder={NEW_COMMENT}
        fullWidth
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
        {error ?? CREATE}
      </LoadingButton>
    </FormControl>
  );
};

export default CommentInput;
