import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { store } from './redux';
import Table from "./pages/Table/Table";
import BarChart from "./pages/BarChart/BarChart";

function App() {
  return (
    <Provider store={store}>
        <Router >
            <Route path='/' exact component={Table}/>
            <Route path='/barchart' component={BarChart}/>
        </Router>
    </Provider>
  );
}

export default App;
