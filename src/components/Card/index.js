import './Card.css'


const card = (props) => {

    

    return (
        <div className='colaborador'>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>
        </div>
    )
}

export default card;