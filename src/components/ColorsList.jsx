import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function ColorsList({list}) {
    const [colorList, setColorList] = useState(list);

    return (
        <>
            <div>
                <h2>Welcome to the color factory.</h2>
                <Link to={'/colors/new'}>Add a color</Link>
            </div>
            <div>
                <p>Please select a color.</p>
                {colorList.map(({name, value}) => {
                    return <li style={{listStyleType:'none'}} key={`${name}-${value}`}><Link to={`/colors/${name}`}>{name}</Link></li>
                })}
            </div>

        </>
    )
}

export default ColorsList;