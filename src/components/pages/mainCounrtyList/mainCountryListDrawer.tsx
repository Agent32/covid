
import countryListStyle from "./countryListStyle.module.scss";
import { countriesListConectedType } from "./mainCountryListContainer";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { InputGroup, FormControl } from 'react-bootstrap'; 
import { inputCondition } from "../../formSettings";
import React, { useState } from "react";

const _ = require("lodash");

const maxLength20 = inputCondition.maxLength(20);
const minLength1 = inputCondition.minLength(1);

const MainCountryListDrawer = (props: countriesListConectedType) => {

  

  //-------------------------sort--------------------------------
  type switchType = 'asc' | 'desc'
  const [sort, setSort] = useState<switchType>('desc');

  const changeSort = () => {
    sort === 'asc' ? setSort('desc') : setSort('asc')
  }
  //-------------------------/sort--------------------------------
  //-------------------------PopUpWindow--------------------------------

  const [isWindowOpen, setWindowsStatus] = useState<boolean>(false);
  const [listNumb, setListNumb] = useState<number>(1);
  const [listDeath, setListDeath] = useState<number>(1);
  const [listRecovered, setListRecovered] = useState<number>(1);
  const [listName, setlistName] = useState<string>('');

  const popWindow = () => {
    return (
      <div className={countryListStyle.popGeneral}>
        <div className={countryListStyle.popWindow}>
          <h3> {listName}</h3>
          <div> Total Confirmed: {listNumb} </div>
          <div> Total Death:  {listDeath} </div>
          <div> Total Recovered:  {listRecovered} </div>
          <button autoFocus={true} onClick={() => setWindowsStatus(false)}> OK </button>
        </div>
      </div>
    )
  }

  //-------------------------/PopUpWindow--------------------------------

  //-------------------------drawers--------------------------------
  const TitleDrawer = () => (
    <div className={countryListStyle.title}>
      <span className={countryListStyle.numb}> №</span>  <span
        className={countryListStyle.countr}
        onClick={() => {
          props.sortCountriesData("Country", sort)
          changeSort()
        }} >Country</span>
      <span
        className={countryListStyle.confirm}
        onClick={() => {
          props.sortCountriesData("TotalConfirmed", sort)
          changeSort()
        }}
      > Total Confirmed </span>
    </div>
  );

  //-----------------------------------searchPart--------------------------------------
  const [inputForSort, setInputForSort] = useState<string>('');
  let inputArea = React.createRef<HTMLInputElement>();
  let tempHolder = props.Countries
  if (inputForSort === '') { tempHolder = props.Countries }
  else {
    tempHolder = _(props.Countries).filter((c: any) => c.Country.toLowerCase().includes(inputForSort.toLowerCase())).value()
  } 
  //-----------------------------------/searchPart--------------------------------------
  const listCountryDrawer = tempHolder.map((current, count) => {
    return (
      <div className={countryListStyle.column} key={current.ID}
        onClick={() => {
          setWindowsStatus(true)
          setlistName(current.Country)
          setListNumb(current.TotalConfirmed)
          setListDeath(current.TotalDeaths)
          setListRecovered(current.TotalRecovered)
        }}>
        <span className={countryListStyle.numb}> {++count} </span>
        <span className={countryListStyle.countr}>{current.Country}</span>
        <span className={countryListStyle.confirm}>{current.TotalConfirmed}</span>
      </div >
    )
  }) 
  //-------------------------/drawers--------------------------------

  return (
    <div className={countryListStyle.main}>
      {isWindowOpen ? popWindow() : null}

      <div className={countryListStyle.heading}>
        <div>
          <img src={`https://images.squarespace-cdn.com/content/v1/5bab98d9f4e53108da59ae49/1587412249763-N5N5IV5KMEMBX7MUB3YW/ke17ZwdGBToddI8pDm48kFNvRL7UXJaJcEmxyIQKNI5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PId-GWN52DlBH0oMtMvXjp29I0ICWpqmL8n0hrhvsfz28/covid19_icon.png`} alt='coronaPic' />
          <h1>STATISTIC</h1>
        </div>
        <div>
     
   <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Search"
      aria-label="Search"
              aria-describedby="Input text to search"
              ref={inputArea}
              value={inputForSort}
              onChange={() => inputArea.current !== null ? setInputForSort(inputArea.current.value) : ''}
    />
  </InputGroup>
        </div>
      </div>

   

      <div className={countryListStyle.table}>

        <TitleDrawer />
        {listCountryDrawer}
      </div>

    </div>
  );
};

export default MainCountryListDrawer;
