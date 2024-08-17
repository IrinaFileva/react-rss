import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataFormSchema } from '../types/dataFormsTypes';
import { SaveFormData } from 'shared/types/formTypes';

const initialState: DataFormSchema = {
  hookForm: [],
  uncontrolledForm: [],
  newForm: null,
};

export const dataFormsSlice = createSlice({
  name: 'dataForms',
  initialState,
  reducers: {
    addUncontrolledForm(state, actions: PayloadAction<SaveFormData>) {
      state.uncontrolledForm.unshift(actions.payload);
    },
    addHookForm(state, actions: PayloadAction<SaveFormData>) {
      state.hookForm.unshift(actions.payload);
    },
    addNewForm(state, actions: PayloadAction<string | null>) {
      state.newForm = actions.payload;
    },
  },
});

export const { addHookForm, addUncontrolledForm, addNewForm } =
  dataFormsSlice.actions;
export const { reducer: dataFormsReducer } = dataFormsSlice;
