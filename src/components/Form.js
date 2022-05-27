import React from 'react'

const Form = ({ handleSubmit }) => {
    const [serachTerm, setSerachTerm] = React.useState('');

    const updateSearchTerm = (e) => {
        console.log(e.target.value);
        serachTerm(e.target.value);
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e, serachTerm)}>
                <input 
                type='text'
                name='search'
                placeholder='Buscar...'
                onChange={updateSearchTerm}>
                </input>
                <button type='submit' disabled={!serachTerm.trim()}>Buscar personaje</button>
            </form>
        </div>
    )
}

export default Form
