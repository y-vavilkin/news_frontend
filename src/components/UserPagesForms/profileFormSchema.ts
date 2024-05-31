import * as Yup from 'yup';

export const addPostSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .max(30, 'Maximum 30 characters')
    .required('Title is required'),
  content: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .required('Content is required'),
  tags: Yup.string()
    .trim()
    .min(1, 'Minimum 1 character')
    .max(255, 'Maximum 255 characters')
    .matches(/^([a-zA-Zа-яА-Я0-9]+,)*[a-zA-Zа-яА-Я0-9]+$/, 'Incorrect tags')
    .required('Tags is required'),
  imagePost: Yup.mixed()
});

export const editProfileSchema = Yup.object().shape({
  login: Yup.string()
    .trim()
    .min(5, 'Minimum 5 character')
    .max(30, 'Maximum 30 characters')
    .required('Title is required'),
  imageUser: Yup.mixed()
});
