import { Reducer } from '@reduxjs/toolkit';
import { CountriesSchema } from 'entities/Countries';
import { DataFormSchema } from 'entities/DataForms';

export interface StateSchema {
  countries: Reducer<CountriesSchema>;
  forms: Reducer<DataFormSchema>;
}
