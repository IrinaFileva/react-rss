import { combineReducers } from '@reduxjs/toolkit';
import { StateSchema } from '../types/StateSchema';
import { countriesReducer } from 'entities/Countries';

export const rootReducer = combineReducers<StateSchema>({
  countries: countriesReducer,
});
