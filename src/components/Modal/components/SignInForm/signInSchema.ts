import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(5, 'Minimum 5 characters')
    .required('Password is required')
});

export default signInSchema;
