import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Navbar from './components/navbar';
import Home from './components/home'
import Data from './components/data'

import './index.css';

class Dashboard extends React.Component {
    render() {

        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/data">
                            <Data />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
);

