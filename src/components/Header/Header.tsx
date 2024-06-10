import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import SearchFilter from '../SearchFilter';
import SearchField from '../SearchField';
import UserMenu from '../UserMenu';
import AuthMenu from '../AuthMenu';

import classes from './Header.module.scss';

const Header = () => {
  const isOnline = useAppSelector((state) => state.auth.isOnline);

  return (
    <Stack direction="row" className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src="/logo.webp" alt="logo" />
      </Link>
      <Stack direction="row" >
        <SearchField />
        <SearchFilter />
      </Stack>
      <Box className={classes.links}>
        {isOnline ? <UserMenu /> : <AuthMenu />}
      </Box>
    </Stack>
  );
};

export default Header;
