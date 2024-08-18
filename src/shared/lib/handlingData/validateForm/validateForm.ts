import { DataForm } from 'shared/types/formTypes';
import { schema } from 'shared/types/validationSchema';
import { ValidationError } from 'yup';

export const validateForm = async (
  formData: DataForm
): Promise<Record<string, string> | null> => {
  try {
    await schema.validate(formData, { abortEarly: false });
    return null;
  } catch (err) {
    const errors: Record<string, string> = {};
    if (err instanceof ValidationError) {
      err.inner.map((error) => {
        const errorKey = error.path;
        if (errorKey) {
          if (!errors[errorKey]) {
            errors[errorKey] = error.message;
          } else {
            errors[errorKey] += ', ' + error.message;
          }
        }
      });
    }
    return errors;
  }
};
