import * as Yup from 'yup';

const authFormSchema = Yup.object().shape({
  login: Yup.string()
    .trim()
    .min(5, 'Mininum 5 characters')
    .max(30, 'Maximum 30 characters')
    .required('Login is required')
    .optional(),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(5, 'Minimum 5 characters')
    .required('Password is required')
});

export default authFormSchema;
