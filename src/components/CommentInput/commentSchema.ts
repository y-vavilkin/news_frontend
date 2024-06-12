import * as Yup from 'yup';

export const commentSchema = Yup.object().shape({
  text: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .required('Text is required')
});
