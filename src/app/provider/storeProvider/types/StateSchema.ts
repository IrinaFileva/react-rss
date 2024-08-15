import { Reducer } from '@reduxjs/toolkit';
import { CountriesSchema } from 'entities/Сountries';

export interface StateSchema {
  countries: Reducer<CountriesSchema>;
}
