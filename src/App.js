import React from 'react';
import logo from './logo.svg';
import './App.css';
import Enterdetails from './components/Enterdetails/Enterdetails.js';
import Entermobno from './components/Entermobno/Entermobno.js';
import EnterOTP from './components/EnterOTP/EnterOTP.js';
import Layout1 from './components/Layout1/Layout1';
import Layout2 from './components/Layout2/Layout2.js';
import Layout3 from './components/Layout3/Layout3.js';
import Layout1f  from './components/Layout1f/Layout1f.js';
import Layout2f from  './components/Layout2f/Layout2f.js';
import Layout3f from  './components/Layout3f/Layout3f.js';
import {BrowserRouter as Router,Switch,Route,Link }  from 'react-router-dom';


function App() {
  return (

  <Router basename={window.location.pathname || ''}>

      <Switch>

           <Route path="/" exact component={Enterdetails}/>  
           <Route path="/mobno" component={Entermobno}/>
           <Route path="/otpverify" component={EnterOTP}/>
           <Route path="/layout1" component={Layout1}/>
           <Route path="/layout2" component={Layout2}/>
           <Route path="/layout3" component={Layout3} />
           <Route path="/layout1f"  component={Layout1f}/>
           <Route path="/layout2f" component={Layout2f}/>
           <Route path="/layout3f" component={Layout3f}/>

      </Switch>


  </Router>

      
    
  );
}

export default App;
