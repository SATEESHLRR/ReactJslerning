import React, { Component } from 'react'
 import RegComp  from './RegComp'
import PureComp from './PureComp'


export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sateesh'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'sateesh'
            })
        },2000)

    }
    
    render() {
        return (
            <div>
               Parent component 
               <RegComp name={this.state.name}></RegComp>
               <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
