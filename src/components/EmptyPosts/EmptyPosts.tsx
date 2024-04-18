import classes from './EmptyPosts.module.scss';

const EmptyPosts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.post}>
        <p>No posts :(</p>
      </div>
    </div>
  );
};

export default EmptyPosts;
