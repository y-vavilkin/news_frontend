import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Button, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Auth, AuthPayload } from '../../../interfaces/auth';
import { authUser } from '../../../redux/actions/auth';
import classes from '../Modal.module.scss';

import signInSchema from './signInSchema';

const SignInForm = () => {
  const dispatch = useAppDispatch();

  const typeModal = useAppSelector(state => state.modal.type);

  const INITIAL_USER: Auth = {
    email: '',
    password: '',
    typeModal: null
  };

  const handleOnSubmit = (
    values: Auth,
    actions: FormikHelpers<Auth>
  ) => {
    const authPayload: AuthPayload = {
      authData: {
        ...values,
        typeModal
      },
      error: null
    };

    dispatch(authUser(authPayload));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_USER}
      validationSchema={signInSchema}
      onSubmit={handleOnSubmit}
    >
      {({ touched, errors }) => {
        const isTouched =
        !(touched.email ?? false) &&
        !(touched.password ?? false);
        const hasErrors =
          Boolean(errors.email?.length) ||
          Boolean(errors.password?.length);
        return (
          <Form className={classes.box}>
            <Field
              as={TextField}
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="email" component="div" className={classes.error}/>
            <Field
              as={TextField}
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="password" component="div" className={classes.error}/>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isTouched || hasErrors}
              style={{ marginTop: '20px' }}
            >
              Continue
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
