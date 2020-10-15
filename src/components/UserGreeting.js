import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return(
            this.state.isLoggedIn ?<div>Welcome Sateesh</div>:<div>welcome Guest</div>
        )

        //2 nd approch
// let message
// if(this.state.isLoggedIn){
//     message=<div>Welcome Sateesh</div>
// } else {
//     message=<div>welcome Guest</div>
// }
// return <div>{message}</div>
//1 st apporoch

//         if(this.state.isLoggedIn){
//     return <div>Welcome Sateesh</div>
// } else {
//         return <div>welcome Guest</div>
//         }

//
        // return (
        //     <React.Fragment>
        //         <div>Welcome Sateesh</div>
        //         <div>Welcome Guest</div>
        //     </React.Fragment>
        // )
    }
}

export default UserGreeting

