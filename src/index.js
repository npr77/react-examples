import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SimpleComponent extends React.Component {

    render() {

        const exampleValue = this.props.exampleValue;
        let button = "";

        if (exampleValue) {
            button = <a href="#top" className="btn btn-primary">{exampleValue}</a>
        } // this is pretty ugly, but seems to be the way according to https://reactjs.org/docs/conditional-rendering.html

        return (
            <div className="card myCard">
                <div className="card-body">
                    <h5 class="card-title">Simple Component</h5>
                    <p class="card-text">I am a simple component. No state, just JSX. Nothing special. Note: Props are Read-Only!</p>
                    {button}
                </div>
            </div>
        );
    }
}

function FunctionComponent(props) {

    const exampleValue = props.exampleValue;
    let button = "";

    if (exampleValue) {
        button = <a href="#top" className="btn btn-primary">{exampleValue}</a>
    }

    return (
        <div className="card myCard">
            <div className="card-body">
                <h5 class="card-title">Function Component</h5>
                <p class="card-text">In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.</p>
                {button}
            </div>
        </div>
    );
}

class SimpleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.countClicks = this.countClicks.bind(this);
        this.state = {
            clicks: 0,
        };
    }

    countClicks() {
        this.setState({clicks: this.state.clicks + 1});
    }

    render() {

        return (
            <div className="card myCard">
                <div className="card-body">
                    <h5 class="card-title">Simple Container</h5>
                    <p class="card-text">Container == Component + State.</p>
                    <a href="#" onClick={this.countClicks} className="btn btn-primary"># of clicks: {this.state.clicks}</a>
                </div>
            </div>
        );
    }
}


class Dashboard extends React.Component {
    render() {

        const helloWorld = 'Hello World!';

        return (
            <div className="reactExamples">
                <SimpleComponent />
                <SimpleComponent exampleValue={helloWorld} />
                <FunctionComponent />
                <FunctionComponent exampleValue={helloWorld} />
                <SimpleContainer />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
);

