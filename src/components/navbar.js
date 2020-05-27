import React from 'react';

import {Link} from "react-router-dom";

class NavbarElement extends React.Component {

    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={this.props.uri}>{this.props.name}</Link>
            </li>
        );
    }
}

export default class Navbar extends React.Component {

    render() {

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">React examples</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <NavbarElement name="Home" uri="/" />
                            <NavbarElement name="Data" uri="/data" />
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