import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/UI/Button/Button';
import InputField from '@/components/UI/Inputs/InputField/InputField';
import RadioGroup from '@/components/UI/Inputs/RadioGroup/RadioGroup';
import { SUBJECT_OPTIONS } from "@/constants/constants"
import classes from './ContactForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  email: yup.string().required('Email is required').email('Enter valid email'),
  phone: yup.string().required('Phone number is required'),
  subject: yup.string().required('Choose the subject'),
  message: yup.string().required('Message is required'),
});

// default properties to handle dirty state
const defaultValues: FormValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    // could add local state to handle loading process  and add tostify to handle it 
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <div className={classes.inputs}>
        <InputField
          {...register('name')}
          dirtyField={dirtyFields.name}
          label="First Name"
          error={errors.name?.message}
        />
        <InputField
          {...register('surname')}
          dirtyField={dirtyFields.surname}
          label="Last Name"
          error={errors.surname?.message}
        />
        <InputField
          {...register('email')}
          dirtyField={dirtyFields.email}
          type="email"
          label="Email"
          error={errors.email?.message}
        />
        <InputField
          {...register('phone')}
          dirtyField={dirtyFields.phone}
          label="Phone Number"
          error={errors.phone?.message}
        />
      </div>

      <RadioGroup
        {...register('subject')}
        label="Select Subject?"
        values={SUBJECT_OPTIONS}
        error={errors.subject?.message}
        dirtyField={dirtyFields.subject}
      />

      <InputField
        {...register('message')}
        label="Message"
        placeholder="Write your message.."
        error={errors.message?.message}
      />

      <Button type="submit" className={classes.submit}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
