import React from 'react';

// parents should know their children -> this.props.children
class Parents extends React.Component {

    render() {
        return (
            <div className="border">
                <h3>Parents</h3>
                <button type="button" class="btn btn-primary">TODO: Tell off children</button>
                {this.props.children}
            </div>
        )
    }
}

// a child should remember it's name -> state
// a child should be able to receive a message from its parents, but will not remember it -> props
class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: this.props.name,
        };
      }

    render() {

        return (
            <div className="border">
                <p>Child: "{this.state.name}"</p>
                <p>Message: "{this.props.message}"</p>
            </div>
        )
    }
}


export default class Data extends React.Component {

    render() {

        return (

            <div>
                <h2>Data example</h2>
                <Parents>
                    <Child name="foo" />
                    <Child name="bar" />
                </Parents>
                <Child name="solo" />
            </div>
        );
    }
}