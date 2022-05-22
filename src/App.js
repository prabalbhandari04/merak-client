import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inventory from "./Pages/Dashboard/Inventory";
import Order from "./Pages/Dashboard/Order";

import Home from "./Pages/Home/Home";



const App = () => {
  return (
  <Router>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/inventory" exact component={Inventory}/>
     <Route exact path='*'component={Home}/> 
     <Route path="/order" exact component={Order}/>
   </Switch>
   </Router>
  );
}

export default App;
