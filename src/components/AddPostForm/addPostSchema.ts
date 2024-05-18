import * as Yup from 'yup';

const addPostSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, 'Minimum 1 character')
    .max(255, 'Maximum 255 characters')
    .required('Title is required'),
  content: Yup.string()
    .min(1, 'Minimum 1 character')
    .required('Content is required'),
  tags: Yup.string()
    .min(1, 'Minimum 1 character')
    .max(255, 'Maximum 255 characters')
    .required('Tags is required'),
  imagePost: Yup.mixed()
});

export default addPostSchema;
