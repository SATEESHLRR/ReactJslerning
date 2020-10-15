import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           message:"Hello"  
        }
        this.clickHandler =this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"Good bye..!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>clcik</button> */}
                {/* <button onClick={() => this.clickHandler()}>click me</button> */}
                <button onClick={this.clickHandler}>clcik</button>
            </div>
        )
    }
}

export default EventBind
