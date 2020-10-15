import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     incrementmethid(){
         this.setState({
           count: this.state.count + 1  
         },()=>{
             console.log('Callback value',this.state.count)
         })
       
         console.log(this.state.count)
     }
     decrement(){
         this.setState({
             count:this.state.count -1
         })
     }
    render() {
        return (
            <React.Fragment>
              <div>count ={this.state.count}</div>
              <button onClick={() =>this.incrementmethid()}>Increment</button>
              <button onClick={() =>this.decrement()}>Decrement</button>
            </React.Fragment>
        )
    }
}

export default Counter
