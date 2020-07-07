import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import './App.css';

class App extends Component {
 
  render() {
    // const {dispatch}=this.props
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