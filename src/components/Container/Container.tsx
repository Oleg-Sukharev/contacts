import { PropsWithChildren } from "react";
import classes from "./Container.module.scss"

interface ContainerProps {
  small?: boolean,
  className?: string;
};

const Container = ({ children, className, small = false }: PropsWithChildren<ContainerProps>) => {
  const containerClasses = [
    classes.container,
    small && classes.small,
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      {children}
    </div >
  );
}

export default Container;