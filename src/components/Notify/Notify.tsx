import { Alert, AlertColor } from '@mui/material';

interface NotifyProps {
  info?: string
  status: AlertColor
}

const Notify = ({ info, status }: NotifyProps) => {
  return (
    <Alert variant="filled" severity={status} >
      {info}
    </Alert>
  );
};

export default Notify;
