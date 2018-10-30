import React, { Component } from 'react';
import {Route} from 'react-router-dom';


//Style
import './App.scss';

//Custom
import routes from './routes';
import Nav from './component/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <Route path={['/dashboard','/calendar','/search']}component={Nav} />
      </div>
    );
  }
}

export default App;
