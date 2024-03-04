import './Form.css'
import TextArea from '../TextArea';

const Form = () => {
    return (
        <section className='forms'>
            <form>
                <h2>Preencha os dados para criar seu card do colaborador</h2>
                <TextArea label="Nome" />
                <TextArea label="Cargo" />
                <TextArea label="Imagem" />
            </form>
        </section>
    )
}

export default Form;