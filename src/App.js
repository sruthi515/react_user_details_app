import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserDetails from './components/UserDetails';
import Home from './components/Home';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=>(<Home />)}/>
          <Route exact path="/user/:id" render={(props)=>(<UserDetails {...props} />)}/>
        </Switch>
      </div>
    );
  }
}

export default App;