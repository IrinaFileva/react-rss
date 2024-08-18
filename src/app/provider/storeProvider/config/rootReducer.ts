import { combineReducers } from '@reduxjs/toolkit';
import { StateSchema } from '../types/StateSchema';
import { countriesReducer } from 'entities/Countries';
import { dataFormsReducer } from 'entities/DataForms';

export const rootReducer = combineReducers<StateSchema>({
  countries: countriesReducer,
  forms: dataFormsReducer,
});
