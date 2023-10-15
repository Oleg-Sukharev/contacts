import React, { forwardRef } from 'react';

import { BsCheck } from "react-icons/bs"
import classes from './RadioGroup.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  values: Readonly<string[]>;
  error?: string;
  dirtyField?: boolean;
}

const RadioGroup = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error, values, dirtyField, ...restProps } = props;

  return (
    <div className={classes.wrapper}>
      <label className={`${classes.title} ${dirtyField ? classes.active : ''}`}>{label}</label>
      <div className={classes.list}>
        {values.map((element, index) => (
          <React.Fragment key={element + index}>
            <input
              type="radio"
              ref={ref}
              value={element + index}
              {...restProps}
              id={element + index}
              className={`sr-only ${classes.input}`}
            />
            <label className={classes.label} htmlFor={element + index}>
              <span className={classes.checkbox}>
                <span className={classes.icon} >
                  <BsCheck size={13} />
                </span>
              </span>
              {element}
            </label>
          </React.Fragment>
        ))}
      </div>

      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
});

export default RadioGroup;
