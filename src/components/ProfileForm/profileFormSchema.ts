import * as Yup from 'yup';

const commonFields = {
  title: Yup.string(),
  content: Yup.string(),
  tags: Yup.string(),
  imagePost: Yup.mixed(),
  login: Yup.string(),
  imageUser: Yup.mixed()
};

export const addPostSchema = Yup.object().shape({
  ...commonFields,
  title: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .max(255, 'Maximum 255 characters')
    .required('Title is required'),
  content: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .required('Content is required'),
  tags: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .max(255, 'Maximum 255 characters')
    .required('Tags is required'),
  imagePost: Yup.mixed()
});

export const editProfileSchema = Yup.object().shape({
  ...commonFields,
  login: Yup.string()
    .trim()
    .min(5, 'Minimum 5 character')
    .max(30, 'Maximum 30 characters')
    .required('Title is required'),
  imageUser: Yup.mixed()
});
