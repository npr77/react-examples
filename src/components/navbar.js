import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';
import Data from './data';

class NavbarElement extends React.Component {

    constructor(props) {
        super(props);
        this.switchContent = this.switchContent.bind(this);
    }

    switchContent() {
        let component;
        switch (this.props.name) {
            case 'Data':
                component = <Data />;
                break;
            default:
                component = <Home />;
                break;
        }

        ReactDOM.render(
            component,
            document.getElementById('content')
        );
    }

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#top" onClick={this.switchContent}>{this.props.name}</a>
            </li>
        );
    }
}

export default class Navbar extends React.Component {

    render() {

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#top">React examples</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <NavbarElement name="Home" />
                            <NavbarElement name="Data" />
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Channel" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                        </form>
                    </div>
                </nav>


            </div>
        );

    }

}