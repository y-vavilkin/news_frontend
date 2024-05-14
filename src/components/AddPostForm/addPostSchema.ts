import * as Yup from 'yup';

const addPostSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, 'Minimum 1 character')
    .required('Title is required'),
  content: Yup.string()
    .min(1, 'Minimum 1 character')
    .required('Content is required'),
  tags: Yup.string()
    .min(1, 'Minimum 1 character')
    .required('Tags is required'),
  image: Yup.mixed()
    .test('isImage',
      'File format: jpeg, jpg, png or gif',
      (value: Yup.AnyObject | undefined) => {
        if (value instanceof FileList) {
          if (value.length === 0) return true;
          return value[0] instanceof File &&
          ['image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif']
            .includes(value[0].type);
        }
      }
    )
});

export default addPostSchema;
