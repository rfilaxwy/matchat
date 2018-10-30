import React, { Component } from 'react';
import {Route} from 'react-router-dom';


//Style
import './App.css';

//Custom
import routes from './routes';
import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={['/dashboard','/calendar','/search']}
          component={Nav} 
          />
        {routes}
      </div>
    );
  }
}

export default App;
