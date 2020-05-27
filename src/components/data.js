import React from 'react';

// parents should know their children -> this.props.children
class Parents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null,
        };
    }

    render() {
        return (
            <div className="border">
                <pre>Parent -> Child: props</pre>
                <pre>Child -> Parent: not directly possible.</pre>
                <pre>Child gets an update function from the parent as props,</pre>
                <pre>calls it so the state of the parent can be altered and rerenderd.</pre>
                
                <h3>Parents</h3>
                <button type="button" className="btn btn-primary" onClick={() => this.setState({ message: "Bad child!" })}>Tell off children</button>

                {/* render each element of the children array */} 
                {/* FIXME: Warning: Each child in a list should have a unique "key" prop. */} 
                {this.props.children.map(element =>
                    <div key={element.id}>
                        {/* and add the message property to each child, so parents can send them messages */} 
                        {React.cloneElement(element, { message: this.state.message })}
                    </div>
                )}

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

        let message = null;
        
        if (this.props.message) {
            message = "Parent: \"" + this.props.message + "\""; 
        }

        return (
            <div className="border">
                <p>Child: "{this.state.name}" {message}</p>
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