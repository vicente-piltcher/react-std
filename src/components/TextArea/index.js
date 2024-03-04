import './TextArea.css'

const TextArea = (props) => {
    let label = props.label;
    
    let pla = props.label.toLowerCase();
    let placeh = "Digite o seu " + pla;

    return(
         <div className="text-area">
            <label>{label}</label>
            <input placeholder={placeh}/>
         </div>
    )
}

export default TextArea;