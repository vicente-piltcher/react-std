import './TextArea.css'

const TextArea = (props) => {
    let label = props.label;
    
    let pla = props.label.toLowerCase();
    let placeh = "Digite o seu " + pla;

    return(
         <div className="text-area">
            <label>{label}</label>
            <input value={props.value} onChange={event => props.onChanged(event.target.value)} required={props.required} placeholder={placeh}/>
         </div>
    )
}

export default TextArea;