import classes from "./InputField.module.scss"
import { forwardRef } from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  dirtyField?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error, dirtyField, ...restProps } = props;

  return (
    <div className={classes.wrapper}>
      <input className={classes.input} ref={ref} {...restProps} />
      <label className={`${classes.label} ${dirtyField ? classes.filled : ''}`}>{label}</label>

      {error && <span className={classes.error} >{error}</span>}
    </div>
  );
});

export default InputField;
