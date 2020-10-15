import React from 'react'

const Greet =(props) =>{
    console.log(props)
return(
    <React.Fragment>
<h1>hello function components{props.name}and {props.age}</h1>
<p>{props.children}</p>
</React.Fragment>
) 
} 
export default Greet
