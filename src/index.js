import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SimpleComponent extends React.Component {

    render() {

        const exampleValue = this.props.exampleValue;
        let button = "";

        if (exampleValue) {
            button = <a href="#self" className="btn btn-primary">{exampleValue}</a>
        } // this is pretty ugly, but seems to be the way according to https://reactjs.org/docs/conditional-rendering.html

        return (
            <div className="card myCard">
                <div className="card-body">
                    <h5 class="card-title">Simple Component</h5>
                    <p class="card-text">I am a simple component. No state, just JSX. Nothing special. Note: Props (arbitrary inputs) are Read-Only!</p>
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
        button = <a href="#self" className="btn btn-primary">{exampleValue}</a>
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
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {

        return (
            <div className="card myCard">
                <div className="card-body">
                    <h5 class="card-title">Simple Container</h5>
                    <p class="card-text">Container == Component + State. But don't take this too seriously as stated <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">here</a></p>
                    <p class="card-text">While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).</p>
                    <ul><li>Do Not Modify State Directly </li>
                        <li>State Updates May Be Asynchronous </li>
                        <li>State Updates are Merged </li>
                    </ul>
                    <a href="#self" onClick={this.countClicks} className="btn btn-primary"># of clicks: {this.state.clicks}</a>
                </div>
            </div>
        );
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {

        return (

            <div className="card myCard">
                <div className="card-body">
                    <h5 class="card-title">Clock Container</h5>
                    <p class="card-text">Example: <a href="https://reactjs.org/docs/state-and-lifecycle.html">https://reactjs.org/docs/state-and-lifecycle.html</a></p>
                    <a href="#self" className="btn btn-primary">It is {this.state.date.toLocaleTimeString()}</a>
                </div>
            </div>
        )
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
                <Clock />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
);

