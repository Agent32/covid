import { useDispatch } from 'react-redux'
import { mainCountryListType } from './types/storeTypes'
import { orderBy } from 'lodash/fp';
import * as actions from './actions/countryListActions'
import { Dispatch } from 'react'
import { serverAL } from '../api/api'
type getOnlyActionTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionTypesM = ReturnType<getOnlyActionTypes<typeof actions>>

const init: mainCountryListType = {
  Countries: [
    {
      ID: 'load',
      Country: 'load',
      CountryCode: 'load',
      Slug: 'load',
      NewConfirmed: 1,
      TotalConfirmed: 1,
      NewDeaths: 1,
      TotalDeaths: 1,
      NewRecovered: 1,
      TotalRecovered: 1,
      Date: 'load',
      Premium: null,
    },
  ],
  mainCounrtySettings: {
    test: 'load',
  },
}
// ========================================
function countryListReducer(
  state: mainCountryListType = init,
  action: ActionTypesM
): mainCountryListType {
  switch (action.type) {
    // --------------

    case 'SET-COUNTRY-LIST/countryCovidPage': {
      return {
        ...state,
        Countries: [...action.data],
      }
    }
    case 'SORT-COUNTIES-DATA/countryCovidPage': {

      if (action.sort === 'country') {
     const answ = state.
       }
      return {
        ...state,
        Countries: [],
      }
    }

    // --------------
    default:
      return state
  }
}
// ========================================

// ========================================
export const getCountriesListTC = () => async (dispatch: Dispatch<ActionTypesM>) => {
  try {
    const newsAnswData = await serverAL.getCountiesCovidList();
    dispatch(actions.setCountriesChange(newsAnswData));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------
/* export const sendNewInvoiceTC = (data: invoiceType) => async (dispatch: ActionTypesM) => {
  try {

    const newsAnswData: invoiceType = await serverAL.newInvoice(data);
    dispatch(pushNewInvoice(newsAnswData))
    dispatch(changeShowingPanel())

  } catch (err) {
    console.log(err); //redirect-eror-page
  }
}; */

// ========================================
export default countryListReducer
