import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Home from './components/home'

import './index.css';

class Dashboard extends React.Component {
    render() {

        return (
            <div>
                <Navbar />
                <div id="content">
                    <Home />
                </div>

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
);

