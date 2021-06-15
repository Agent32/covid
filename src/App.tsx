import "./App.css";
import MainCountryListContainer from "./components/pages/mainCounrtyList/mainCountryListContainer";
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/countries" />


        <Route path="/countries" component={MainCountryListContainer} />
      </Switch>
    </div>
  );
}

export default App;
