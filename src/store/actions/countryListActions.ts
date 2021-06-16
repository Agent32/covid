import { countriesStatCovidType } from '../types/storeTypes'

export const setCountriesChange = (data:Array <countriesStatCovidType>) => ({
  type: 'SET-COUNTRY-LIST/countryCovidPage',
  data
}as const)
// --------------


export const sortCountriesData = (whatSort:'Country'|'TotalConfirmed', direction:'asc'|'desc') => ({
  type: 'SORT-COUNTIES-DATA/countryCovidPage',
  whatSort,
  direction
}as const)

