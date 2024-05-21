import { CircularProgress } from '@mui/material';

import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader}>
      <CircularProgress color="secondary" size="1.5em" />
    </div>);
};

export default Loader;
