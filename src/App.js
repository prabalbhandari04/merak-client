import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inventory from "./Pages/Dashboard/Inventory";
import Order from "./Pages/Dashboard/Order";
import Bill from "./Pages/Dashboard/Bill";
import Home from "./Pages/Home/Home";
import FilterTest from "./Pages/Dashboard/FilterTest";


const App = () => {
  return (
  <Router>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/inventory" exact component={Inventory}/>
     <Route path='/order' exact component={Order}/>
     <Route path='/bill' exact component={Bill}/>
     <Route path='/filter' exact component={FilterTest}/>
     <Route exact path='*'component={Home}/> 
   </Switch>
   </Router>
  );
}

export default App;
