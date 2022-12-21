import { useState} from 'react';

export const Cars = () => {
    const [car, setCar] = useState('');
    const [cars, setCars] = useState([]);
    const saveClicked = () => {
        setCars([...cars, car])
        setCar('')
    }

    const data = cars.map( (a,index) => <li key={index}>{a}</li>)
    return (
        <div>
            <p>Tehtävät 9-10</p>
         
    
                <Info count={cars.length}/>
            <label>
                Nimi:
                <input type="text" value={car} onChange={(e) => setCar(e.target.value)} />
            </label>
            <button onClick={() => saveClicked()}>Save</button>
            <ul>{data}</ul>
        </div>
    )
}

export const Info = (props) => {

    const txt = props.count >= 5 ? <h2>Ainaki 5 nimeä on jo syötetty</h2> : null
    return (
        <div>{txt}</div>
    )
}