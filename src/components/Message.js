import React, { Component } from 'react'

export class Message extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"welcome state"
        }
    }
    
    changeMessage(){
        this.setState({
            message:"i am undersatanding state concept"
        })
    }

    render() {
        return (
            <div>
             <h1>{this.state.message}</h1>   
             <button onClick={() =>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
