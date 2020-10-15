// import React from 'react'

// function Destructuring({name,heroname}) {
//     return (
//         <React.Fragment>
//             <h1>Hello {name} housename {heroname}</h1>
//         </React.Fragment>
//     )
// }

// export default Destructuring

import React, { Component } from 'react'

export class Destructuring extends Component {
    render() {
        const {name,heroname} =this.props
        return (
            <div>
                <h2>Welcome Destructuring {name} enteparu {heroname}</h2>
            </div>
        )
    }
}

export default Destructuring

