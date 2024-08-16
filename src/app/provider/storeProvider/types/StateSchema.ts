import { Reducer } from '@reduxjs/toolkit';
import { CountriesSchema } from 'entities/Countries';

export interface StateSchema {
  countries: Reducer<CountriesSchema>;
}
