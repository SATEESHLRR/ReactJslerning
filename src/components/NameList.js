import React from 'react'
import Person from './Person'

function NameList() {
   const names =['sateesh','ramana','lakshmi','sateesh']
    const persons=[
        {
            id:1,
            name:'sateesh',
            age:27,
            skils:'React'
        },
        {
            id:2,
            name:'ramana',
            age:47,
            skils:'C++'
        },
        {
            id:3,
            name:'LAKSHMI',
            age:37,
            skils:'Angular'
        },
    ]
//const personList =  persons.map(person =><Person key={person.id} person={person} />)
const nameList =  names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
return <div>{nameList}</div>
    
    
}

export default NameList
