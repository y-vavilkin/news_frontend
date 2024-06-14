import { FormControl, Stack, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction } from 'react';
import { LoadingButton } from '@mui/lab';

import { ERROR, NEW_COMMENT, PRIMARY, SAVE_INPUT_TEXT } from '../../constants';
import { editCommentRequested } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentData } from '../../interfaces/comments';

import { commentSchema } from './commentSchema';

export interface ChangeCommentProps {
  changeVisibility: Dispatch<SetStateAction<boolean>>
}

const ChangeComment = ({ changeVisibility }: ChangeCommentProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.comments.isLoadingComment);
  const error = useAppSelector(state => state.comments.error);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      text: ''
    }
  });

  const inputError = errors.text?.message;

  const onSubmit: SubmitHandler<CommentData> = (data: CommentData) => {
    dispatch(editCommentRequested(data));
    changeVisibility(false);
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
          {...register('text')}
          error={!!inputError}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loading={isLoading}
          color={error !== null ? ERROR : PRIMARY}
        >
          {error ?? SAVE_INPUT_TEXT}
        </LoadingButton>
      </Stack>
    </FormControl>
  );
};

export default ChangeComment;
