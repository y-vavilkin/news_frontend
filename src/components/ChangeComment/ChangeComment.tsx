import { FormControl, Stack, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';

import { editCommentRequested, setInputTextForEdit } from '../../redux/actions/comments';
import { NEW_COMMENT, SAVE_INPUT_TEXT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentData } from '../../interfaces/comments';

import { commentSchema } from './commentSchema';

const ChangeComment = () => {
  const dispatch = useAppDispatch();
  const commentText = useAppSelector(state => state.comments.inputTextForEdit);
  const isLoading = useAppSelector(state => state.comments.isLoadingComment);
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
    dispatch(setInputTextForEdit(event.target.value));
  };

  const onSubmit: SubmitHandler<CommentData> = (data: CommentData) => {
    dispatch(editCommentRequested(data));
  };

  return (
    <FormControl
      fullWidth
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="row">
        <TextField
          placeholder={inputError ?? NEW_COMMENT}
          fullWidth
          value={commentText}
          {...register('text')}
          onChange={onChangeCommentText}
          error={!!hasInputError}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loading={isLoading}
          color={error !== null ? 'error' : 'primary'}
        >
          {error ?? SAVE_INPUT_TEXT}
        </LoadingButton>
      </Stack>
    </FormControl>
  );
};

export default ChangeComment;
