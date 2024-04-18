import { Alert } from '@mui/material';

const EmptyPosts = () => {
  return (
    <Alert variant="filled" severity="success">
      Everything is ok, but there are no posts :(.
    </Alert>
  );
};

export default EmptyPosts;
