import React from 'react';
//import { Router,Route, IndexRoute } from 'react-router'
import {Router,Route,IndexRoute,browserHistory,Link} from 'react-router';
import Index from './index';
import About from './about';
const routes=(
    
          <Route path={'/'} >
        <IndexRoute  component={Index.ToDoComponent} />
        <Route path={'about'} component={About}></Route>
        </Route>
      
)

module.exports = routes;