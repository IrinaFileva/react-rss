import { RootState } from 'app/provider/storeProvider';
import { DataFormSchema } from '../types/dataFormsTypes';

export const getDataForms = (state: RootState): DataFormSchema => {
  return state.forms;
};
