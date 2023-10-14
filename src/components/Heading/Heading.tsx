import { PropsWithChildren } from 'react';
import classes from "./Heading.module.scss";

interface HeadingProps {
  title: string;
  center?: boolean;
  className?: string;
}

const Heading = ({ children, title, center = true, className = "" }: PropsWithChildren<HeadingProps>) => {
  return (
    <div className={`${center ? classes.center : ""} ${className}`}>
      {title && <h1 className={classes.title}>{title}</h1>}
      {children && <div className={classes.description}>{children}</div>}
    </div>
  );
};


export default Heading;