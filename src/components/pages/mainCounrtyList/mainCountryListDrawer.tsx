
import countryListStyle from "./countryListStyle.module.scss";
import { countriesListConectedType } from "./mainCountryListContainer";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { inputCondition } from "../../formSettings";

const maxLength20 = inputCondition.maxLength(20);
const minLength1 = inputCondition.minLength(1);

const MainCountryListDrawer = (props: countriesListConectedType) => {



  //-----------------Form------------------------ 
  const SimpleForm = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <span>
          <Field name="firstName" className={countryListStyle.searchField} component="input" type="text" placeholder="Search" validate={[minLength1, maxLength20]} />
        </span> </form>
    )
  }

  const ContactForm = reduxForm({
    form: 'simple'
  })(SimpleForm)
  //----------------------------------------- 
  const test = (a: any) => { alert(a.firstName) }
  //----------------------------------------- 


  const drawFullData =(confirmed:number, death:number, recovered:number) =>
  {
    alert (`${confirmed}, ${death}, ${recovered}`)
  }

  const TitleDrawer = () => (
    <div className={countryListStyle.title}>
      <span className={countryListStyle.numb}> №</span>  <span className={countryListStyle.countr} >Country</span>  <span className={countryListStyle.confirm}> Total Confirmed </span>
    </div>
  );
  const listCountryDrawer = props.Countries.map((current, count) => {
    return (
      <div className={countryListStyle.column} key={current.ID} onClick={()=>{drawFullData(current.TotalConfirmed, current.TotalDeaths, current.TotalRecovered)}}>
        <span className={countryListStyle.numb}> {++count} </span> <span className={countryListStyle.countr}>{current.Country}</span>  <span className={countryListStyle.confirm}>{current.TotalConfirmed}</span>
      </div >
    )
  })


  return (
    <div className={countryListStyle.main}>


      <div className={countryListStyle.heading}>
        <div>
          <img src={`https://images.squarespace-cdn.com/content/v1/5bab98d9f4e53108da59ae49/1587412249763-N5N5IV5KMEMBX7MUB3YW/ke17ZwdGBToddI8pDm48kFNvRL7UXJaJcEmxyIQKNI5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PId-GWN52DlBH0oMtMvXjp29I0ICWpqmL8n0hrhvsfz28/covid19_icon.png`} alt='coronaPic' />
          <h1>STATISTIC</h1>
        </div>
        <div>
          <ContactForm onSubmit={test} />
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
