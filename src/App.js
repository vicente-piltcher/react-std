
import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [person, setPerson] = useState([])

  const teams = [
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
]

  const singinPerson = (p) => {
    console.log(p)
    setPerson([...person, p])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams} signedPerson = {p => singinPerson(p)}/>
      
      {teams.map(team => <Team key={team.name} persons={person.filter( p => p.team === team.name)} nameTeam={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor}/>)}

    </div>
  )

}

export default App;
