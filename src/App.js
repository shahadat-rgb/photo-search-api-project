import React from 'react';
import Product from './Component/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Inventory from './Component/Inventory/Inventory';
import NoMatch from './Component/NoMatch/NoMatch';
import Review from './Component/Review/Review';


function App() {
 
  return (
<>
  <Router> 
      <Switch>
        <Route path='/home'> 
           <Product></Product>
        </Route>
        
        <Route path='/review'> 
            <Review></Review>
        </Route>

        <Route path='/inventory'> 
            <Inventory></Inventory>
        </Route>

        <Route exact path='/'> 
           <Product></Product>
        </Route>

        <Route path='*'> 
           <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
