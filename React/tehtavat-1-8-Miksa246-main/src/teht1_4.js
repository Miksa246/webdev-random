
  import { useState} from 'react';

const Laskuri = () => {
    const [laskuri, setLaskuri] = useState(0);

    return (
        <div>
            <Arvo arvo={laskuri} />
            <button onClick={() => setLaskuri(laskuri+1)}>Kasvata</button>
            <button onClick={() => setLaskuri(0)}>Nollaa</button>
        </div>
    )
}

const Arvo = (props) => {
    const vari = props.arvo > 10 ? 'red' : 'black';
    return (
        <h1 style={{color : vari}}>Laskuri on {props.arvo}</h1>
    )
} 

export { Laskuri, Arvo }
