import React, {useState} from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

function color({list}){
    const params = useParams()
    const color = params.color
    const navigate = useNavigate()
    const [colorList, setColorList] = useState(list);
    const colorName = colorList.find(({name}) => {
        return name == color;
    })
    
    if (!colorName) {
        return <Navigate to={'/colors'} />;
    }

    return (
        <div className='individual-color' style={{backgroundColor:`${colorName.value}`}}>
            <h1>This is the color {colorName.name}</h1>
            <a onClick={() => navigate('/colors')} style={{color:'white'}}><h1>Go Back</h1></a>
        </div>
    )
}

export default color;