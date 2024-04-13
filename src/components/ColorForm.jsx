import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function ColorForm({addNewColor}){
    const INITIAL_STATE = {
        name: '',
        value: ''
    }
    const navigate = useNavigate();
    const [input, setInput] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput(input => ({...input, [name]: `${value}`}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewColor(input);
        navigate(`/colors/${input.name}`);

    }
    return (
        <div className='colorForm'>
            <h2>Add New Color</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name: </label>
                <input type="text" name='name' id='name' onChange={handleChange}/>
                <label htmlFor="value">Color Value: </label>
                <input type="color" id="value" name="value" onChange={handleChange}/>
                <button>Let's Go!</button>
            </form>
        </div>
    )
}

export default ColorForm;