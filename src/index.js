import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux
import {Provider} from 'react-redux';
import store from './ducks/store';

//Routing
import {BrowserRouter as Router} from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </ Router>
    </ Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

