export type countriesStatCovidType = {
  ID: string
  Country: string
  CountryCode: string
  Slug: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: string
  Premium: null
}

type countryListSettingType = {
  test: string
}



export type mainCountryListType = {
  Countries: Array<countriesStatCovidType>
  mainCounrtySettings: countryListSettingType
}

export type serverResponse = {
  ID: string
  Message: string
  Global: any
  Countries: Array<countriesStatCovidType>
  Date: string
}
