import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import GraphPage from './GraphPage';
import Navbar from './Navbar';


export default function Index() {


    return(
      <Router>
       
        <Navbar/>
       <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route  path="/grafica" component={GraphPage}/>
       </Switch>
       
      </Router>
    )
}