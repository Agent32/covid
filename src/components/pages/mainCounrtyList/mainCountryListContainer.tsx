import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { sortCountriesData } from "../../../store/actions/countryListActions";
import { getCountriesListTC } from "../../../store/countryListReducer";
import { globalStateType } from "../../../store/store";
import MainCountryListDrawer from './mainCountryListDrawer'

const mapStateToProps = (state: globalStateType) => {
  return {
    Countries: state.countiesCovidPart.Countries,
    mainCounrtySettings: state.countiesCovidPart.mainCounrtySettings
  }
};

const connector = connect(mapStateToProps, { getCountriesListTC, sortCountriesData })
export type countriesListConectedType = ConnectedProps<typeof connector>

function MainCountryListContainerConnect(props: countriesListConectedType) {

  useEffect(() => {
    props.getCountriesListTC();
  }, []);



  return <MainCountryListDrawer {...props} />;
}

// ========================================


const MainCountryListContainer = connector(MainCountryListContainerConnect);

export default MainCountryListContainer;
