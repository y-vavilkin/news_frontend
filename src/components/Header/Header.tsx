import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import FiltersField from '../FiltersField';
import SearchField from '../SearchField';
import UserMenu from '../UserMenu';
import AuthMenu from '../AuthMenu';

import classes from './Header.module.scss';

const Header = () => {
  const isOnline = useAppSelector((state) => state.auth.isOnline);

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src="/logo.webp" alt="logo" />
      </Link>
      <div className={classes.inputs}>
        <SearchField />
        <FiltersField />
      </div>
      <div className={classes.links}>
        {isOnline ? <UserMenu /> : <AuthMenu />}
      </div>
    </div>
  );
};

export default Header;
