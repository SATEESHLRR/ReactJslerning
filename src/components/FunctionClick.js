// import React from 'react'

// function FunctionClick() {
//     function clickHandler(){
//         console.log('button clicked')
//     }
//     return (
//         <div>
//          <button onClick={clickHandler}>Click</button>   
//         </div>
//     )
// }

// export default FunctionClick

import React, { Component } from 'react'

export class FunctionClick extends Component {
    clickHandler(){
        console.log("click the button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>   
            </div>
        )
    }
}

export default FunctionClick

