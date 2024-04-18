import { type ReactNode } from 'react';

import classes from './Content.module.scss';

interface ContentProps {
  component: ReactNode
}

const Content = ({ component }: ContentProps) => {
  return (
    <div className={classes.container}>
        <ul className={classes.posts}>
          {component}
        </ul>
      </div>
  );
};

export default Content;
