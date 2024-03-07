import './Team.css'
import Card from '../Card';


const Team = (props) => {
    
    return (
        (props.persons.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nameTeam}</h3>
            <div className='colab'>
                {props.persons.map( p => <Card name={p.name} job={p.job} img={p.image}/>)}
            </div>
        </section>
        : ''
    )
}

export default Team