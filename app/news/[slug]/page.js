

export default function Page({ params }) {
 const details =[
  { id : 1, name: 'Yash', role: 'Senior Developer'},

  { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
  
  { id : 3, name: 'Suresh', role: 'Frontend Developer'}
 ]

  const person = details.find(person=>person.id==params.slug)
 console.log(person)

  return <div>My News:{person.name} </div>
}