import { countriesStatCovidType } from '../types/storeTypes'

export const setCountriesChange = (data:Array <countriesStatCovidType>) => ({
  type: 'SET-COUNTRY-LIST/countryCovidPage',
  data
}as const)
// --------------

export const sortCountriesData = (sort:'country'|'confirmed') => ({
  type: 'SORT-COUNTIES-DATA/countryCovidPage',
  sort
}as const)
