import React from 'react';
// import Header from './components/Header'
// import Headerdeux from './components/Headerdeux'
// import Footer from './components/Footer'
import Carde from './components/Carde'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import  Acceuil from './views/Acceuil'; 
import Genre from './views/Genre'
import  Details from './views/Details';
import  Action from './views/Action';

function App() {

  

  return (
    // <div>
      /* <Header />
      
      <Headerdeux />



      <Carde />

<Footer /> */


   <Router>
            <>

       <Switch>
         <Route exact path="/">
       <Acceuil />
         </Route>
         <Route path="/Genre">
       <Genre />
         </Route>
         <Route path="/Details/:id">
          <Details/>
         </Route>
         <Route path="/Action">
          <Action/>
          
         </Route>
        
       </Switch>
     </>
   </Router> 
  
  
    // </div>
  );
}

export default App;
