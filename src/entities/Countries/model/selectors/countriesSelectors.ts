import { RootState } from 'app/provider/storeProvider';

export const getCountries = (state: RootState): string[] => {
  return state.countries.countries;
};
