import { Box, CircularProgress } from '@mui/material';

import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <Box className={classes.loader}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
