import { createSlice } from '@reduxjs/toolkit';
import { CountriesSchema } from 'entities/Сountries';
import { COUNTRIES } from 'shared/const';

const initialState: CountriesSchema = {
  countries: COUNTRIES,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export const { reducer: countriesReducer } = countriesSlice;
