import classes from './Button.module.scss';
import { forwardRef } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className = '', ...restProps }, ref) => {

  return (
    <button ref={ref} className={`${classes.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
});

export default Button;
