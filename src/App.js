import React,{useContext} from "react";
import {BrowserRouter as Router, Switch, Route,Routes,useLocation} from 'react-router-dom';
import Inventory from "./Pages/Dashboard/Inventory";
import Order from "./Pages/Dashboard/Order";
import Register from "./Pages/Users/Register"
import Login from "./Pages/Users/Login"
import Home from "./Pages/Home/Home";
import FilterTest from "./Pages/Dashboard/FilterTest";
import Organizations from "./Pages/Organizations/Organizations";
import Teams from "./Pages/Organizations/Teams";
import Start from "./Pages/Organizations/Start";
import LocationSearchModal from "./Components/Molecules/LocationSearchModal";
import Customer from "./Pages/Dashboard/Customer";

const App = () => {
  return (
  <Router>
   <Switch >
     <Route path="/" exact component={Home}/>
     <Route path="/inventory" exact component={Inventory}/>
      <Route path="/map" exact component={LocationSearchModal}/>
     <Route path='/order' exact component={Order}/>
     <Route path='/start' exact component={Start}/>
     <Route path='/organization' exact component={Organizations}/>
     <Route path='/teams' exact component={Teams}/>
     <Route path='/filter' exact component={FilterTest}/>
     <Route path="/register" exact component={Register}/>
     <Route path="/login" exact component={Login}/>
     <Route path="/customer" exact component={Customer}/>
     <Route exact path='*'component={Home}/> 
     
   </Switch>
   </Router>
  );
}

export default App;