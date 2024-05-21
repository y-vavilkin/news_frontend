import * as Yup from 'yup';

const editProfileSchema = Yup.object().shape({
  login: Yup.string()
    .trim()
    .min(5, 'Minimum 5 character')
    .max(30, 'Maximum 30 characters')
    .required('Title is required'),
  imageUser: Yup.mixed()
});

export default editProfileSchema;
