import React,{useContext} from "react";
import {BrowserRouter as Router, Switch, Route,Routes,useLocation} from 'react-router-dom';
import Inventory from "./Pages/Dashboard/Inventory";
import Order from "./Pages/Dashboard/Order";
import Invoice from "./Pages/Invoice/Invoice";
import InvoiceDetails from "./Pages/Invoice/InvoiceDetails";
import Register from "./Pages/Users/Register"
import Login from "./Pages/Users/Login"
import Home from "./Pages/Home/Home";
import FilterTest from "./Pages/Dashboard/FilterTest";
import Organizations from "./Pages/Organizations/Organizations";
import Teams from "./Pages/Organizations/Teams";
import Start from "./Pages/Organizations/Start";
import InvoiceFormContainer from "./Pages/Invoice/InvoiceFormContainer";
import Drawer from './Components/Molecules/Drawer';
import { AppContext } from './context/AppContext';
import GlobalStyle from './styles/globalStyles';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const { isDrawerOpen } = useContext(AppContext);
  return (
    <div className="App">
        <GlobalStyle isDrawerOpen={isDrawerOpen} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:invoiceId" element={<InvoiceDetails />} />
          </Switch>
        </AnimatePresence>
        <Drawer isOpen={isDrawerOpen}>
          <InvoiceFormContainer />
        </Drawer>
    </div>
  );
}

export default App;
