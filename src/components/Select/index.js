import './Select.css'

const select = (props) => {


    return (
        <div className='select'>

            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={event => props.onChanged(event.target.value)}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default select;