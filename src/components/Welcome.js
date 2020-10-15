import React, { Component } from 'react'

 class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>hello class components {this.props.name} and version is{this.props.version}</h1>
            </React.Fragment>
        )
    }
}

export default Welcome
