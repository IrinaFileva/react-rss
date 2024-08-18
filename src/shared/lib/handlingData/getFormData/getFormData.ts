import { DataForm, FormRefs } from 'shared/types/formTypes';

export const getFormData = (refs: FormRefs): DataForm => {
  const formInput = {
    name: refs.name.current.value,
    age: refs.age.current.value,
    email: refs.email.current.value,
    pass: refs.pass.current.value,
    confirmPass: refs.confirmPass.current.value,
    gender: refs.gender.current.value,
    tc: refs.tc.current.checked,
    file: refs.file.current.files,
    country: refs.country.current.value,
  };

  return formInput;
};
