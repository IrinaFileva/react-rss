import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Input } from '../components/Input';
import { SelectGender } from '../components/SelectGender';
import { SelectCountries } from '../components/SelectCountries';
import { useAppDispatch } from 'shared/lib/hooks';
import { addNewForm, addUncontrolledForm } from 'entities/DataForms';
import { FormRefs, LabelTitle, Paths } from 'shared/types';
import {
  convertFormData,
  getFormData,
  validateForm,
} from 'shared/lib/handlingData';
import styles from './UncontrolledForm.module.css';

export const UncontrolledForm = () => {
  const formRefs: FormRefs = {
    name: useRef<HTMLInputElement>(null!),
    age: useRef<HTMLInputElement>(null!),
    email: useRef<HTMLInputElement>(null!),
    pass: useRef<HTMLInputElement>(null!),
    confirmPass: useRef<HTMLInputElement>(null!),
    gender: useRef<HTMLSelectElement>(null!),
    country: useRef<HTMLInputElement>(null!),
    file: useRef<HTMLInputElement>(null!),
    tc: useRef<HTMLInputElement>(null!),
  };

  const formRef = useRef<HTMLFormElement>(null!);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = getFormData(formRefs);
    console.log(formData);
    const result = await validateForm(formData);
    console.log(result);

    if (result) {
      setErrors(result);
    } else {
      const data = await convertFormData(formData);
      dispatch(addUncontrolledForm(data));
      dispatch(addNewForm('notHook'));
      navigate(Paths.main);
      setTimeout(() => {
        dispatch(addNewForm(null));
      }, 5000);
    }
  };

  return (
    <div className={styles.uncontrolledFormWrap}>
      <form
        className={styles.uncontrolledForm}
        noValidate
        ref={formRef}
        onSubmit={submitHandler}
      >
        <Input
          name={'name'}
          type="text"
          title={LabelTitle.name}
          error={errors.name}
          refs={formRefs.name}
          isValid={!errors.name}
        />
        <Input
          name={'age'}
          type="number"
          title={LabelTitle.age}
          error={errors.age}
          refs={formRefs.age}
          isValid={!errors.age}
        />
        <SelectGender
          name={'gender'}
          title={LabelTitle.gender}
          error={errors.gender}
          refs={formRefs.gender}
          isValid={!errors.gender}
        />
        <Input
          name={'email'}
          type="email"
          title={LabelTitle.email}
          error={errors.email}
          refs={formRefs.email}
          isValid={!errors.email}
        />
        <Input
          name={'pass'}
          type="password"
          title={LabelTitle.pass}
          error={errors.pass}
          refs={formRefs.pass}
          isValid={!errors.pass}
        />
        <Input
          name={'confirmPass'}
          type="password"
          title={LabelTitle.confirmPass}
          error={errors.confirmPass}
          refs={formRefs.confirmPass}
          isValid={!errors.confirmPass}
        />
        <SelectCountries
          name={'country'}
          title={LabelTitle.country}
          refs={formRefs.country}
          error={errors.country}
          isValid={!errors.country}
        />
        <Input
          name={'file'}
          type="file"
          title={LabelTitle.image}
          refs={formRefs.file}
          isValid={!errors.file}
          error={errors.file}
        />
        <Input
          name={'tc'}
          type="checkbox"
          refs={formRefs.tc}
          title={LabelTitle.tc}
          isValid={!errors.tc}
          error={errors.tc}
        />
        <button className={styles.buttonSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
