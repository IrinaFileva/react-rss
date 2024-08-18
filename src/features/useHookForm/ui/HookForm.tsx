import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { addHookForm, addNewForm } from 'entities/DataForms';
import { convertFileData } from 'shared/lib/handlingData';
import { useAppDispatch } from 'shared/lib/hooks';
import { DataFormForHook, LabelTitle, Paths, schema } from 'shared/types';
import { SelectGender } from '../components/SelectGender';
import { SelectCountries } from '../components/SelectCountries';
import { Input } from '../components/Input';
import styles from './HookForm.module.css';

export const HookForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, reset } = useForm<DataFormForHook>(
    {
      resolver: yupResolver<DataFormForHook>(schema),
      mode: 'all',
    }
  );

  const onSubmit = async (data: DataFormForHook) => {
    const value = await convertFileData(data.file[0]);
    dispatch(addHookForm({ ...data, file: value, age: data.age.toString() }));
    dispatch(addNewForm('hook'));
    navigate(Paths.main);
    setTimeout(() => {
      dispatch(addNewForm(null));
    }, 5000);

    reset();
  };

  return (
    <div className={styles.hookFormWrap}>
      <form
        className={styles.hookForm}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Input
          name={'name'}
          type="text"
          title={LabelTitle.name}
          error={formState.errors['name']?.message}
          isValid={!formState.errors['name']?.message}
          register={register}
        />
        <Input
          name={'age'}
          type="number"
          title={LabelTitle.age}
          error={formState.errors['age']?.message}
          isValid={!formState.errors['age']?.message}
          register={register}
        />
        <SelectGender
          name={'gender'}
          title={LabelTitle.gender}
          error={formState.errors['gender']?.message}
          isValid={!formState.errors['gender']?.message}
          register={register}
        />
        <Input
          name={'email'}
          type="email"
          title={LabelTitle.email}
          error={formState.errors['email']?.message}
          isValid={!formState.errors['email']?.message}
          register={register}
        />
        <Input
          name={'pass'}
          type="password"
          title={LabelTitle.pass}
          error={formState.errors['pass']?.message}
          isValid={!formState.errors['pass']?.message}
          register={register}
        />
        <Input
          name={'confirmPass'}
          type="password"
          title={LabelTitle.confirmPass}
          error={formState.errors['confirmPass']?.message}
          isValid={!formState.errors['confirmPass']?.message}
          register={register}
        />
        <SelectCountries
          name={'country'}
          title={LabelTitle.country}
          error={formState.errors['country']?.message}
          isValid={!formState.errors['country']?.message}
          register={register}
        />
        <Input
          name={'file'}
          type="file"
          title={LabelTitle.image}
          error={formState.errors['file']?.message}
          isValid={!formState.errors['file']?.message}
          register={register}
        />
        <Input
          name={'tc'}
          type="checkbox"
          title={LabelTitle.tc}
          error={formState.errors['tc']?.message}
          isValid={!formState.errors['tc']?.message}
          register={register}
        />
        <button
          className={styles.buttonSubmit}
          type="submit"
          disabled={!formState.isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
