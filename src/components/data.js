import React from 'react';

class Parents extends React.Component {

    constructor(props) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
        this.state = {
            children: props.children,
        };
    }

    renderChildren() {
        return (
            <div>TODO</div>
        );
    }

    render() {
        return (
            <div className="border">
                <h3>Parents</h3>
                {this.renderChildren}
            </div>
        )
    }
}

class Child extends React.Component {

    render() {

        const name = this.props.name;

        return (
            <div className="border">
                <p>Child: {name}</p>
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