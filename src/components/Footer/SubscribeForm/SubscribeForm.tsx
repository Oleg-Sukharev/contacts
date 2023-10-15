import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/UI/Button/Button';
import classes from './SubscribeForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

export interface IFormFields {
  email: string;
}

const SubscribeForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Email is incorrect').required('Email is required'),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormFields> = () => {
    alert("Thank you for subscribing!");
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={classes.inputField}>
          <input
            type="email"
            {...register('email')}
            className={classes.input}
            placeholder="Your email address"
          />
          <Button type="submit" className={classes.button}>
            Subscribe
          </Button>
          {errors.email && <span className={classes.error}>{errors.email.message}</span>}
        </div>

      </form>
      <div className={classes.info}>
        *  Will send you weekly updates for your <br /> better tool management.
      </div>
    </>
  );
};

export default SubscribeForm;
