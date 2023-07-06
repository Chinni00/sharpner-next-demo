import React from 'react'

const page = ({params}) => {
    const details =[
        { id : 1, name: 'Yash', role: 'Senior Developer'},
      
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
       ]
       const person = details.find(person=>person.name==params.aboutus)
  return (
    <div>
        <h1>About US</h1>
         <p>Name:{person.name}</p>
         <p>Role:{person.role}</p>
    </div>
  )
}

export default page