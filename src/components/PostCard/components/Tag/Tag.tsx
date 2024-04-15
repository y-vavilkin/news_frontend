import classes from './Tag.module.scss';

export interface TagProps {
  id: number
  text: string
}

const Tag = ({ id, text }: TagProps) => {
  return (
    <li key={id} className={classes.tag}>{text}</li>
  );
};

export default Tag;
