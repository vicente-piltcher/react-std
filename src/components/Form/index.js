import './Form.css'
import TextArea from '../TextArea';
import Select from '../Select';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const cb = (event) => {
        event.preventDefault();
        props.signedPerson({
            name: name,
            job: job,
            image: image,
            team: team
        })
    }

    const teamsForSelect = props.teams.map(team => team.name)

    const [name, setName] = useState()
    const [job, setJob] = useState()
    const [image, setImage] = useState()
    const [team, setTeam] = useState()

  
    return (

        <section className='forms'>
            <form onSubmit={cb}>
                <h2>Preencha os dados para criar seu card do colaborador</h2>
                <TextArea 
                    required={true} 
                    label="Nome" 
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextArea 
                    required={true} 
                    label="Cargo" 
                    value={job}
                    onChanged={value => setJob(value)}
                />
                <TextArea 
                    label="Imagem" 
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Select 
                    required={true} 
                    label="Time" 
                    itens={teamsForSelect} 
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;