import { Alert, AlertColor } from '@mui/material';
import classes from './Notify.module.scss';

interface NotifyProps {
  info: string
  status: AlertColor
}

const Notify = ({ info, status }: NotifyProps) => {
  return (
    <div className={classes.block}>
      <Alert className={classes.alert} variant="filled" severity={status} >
        {info}
      </Alert>
    </div>
  );
};

export default Notify;
