import React from 'react'

function Person({person}) {
    return (
        <div>
             <h2>I am {person.name.toUpperCase()},I am {person.age} years old.I know {person.skils} </h2>

        </div>
    )
}

export default Person
