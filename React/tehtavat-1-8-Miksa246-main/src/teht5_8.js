import { useState} from 'react';

const Lista = () => {
    const [opiskelijat, ] = useState([
        { etunimi: "Testi", sukunimi : "Testaaja", aloitusvuosi : 1999},
        { etunimi: "Teemu", sukunimi : "Teräväinen", aloitusvuosi : 2019},
        { etunimi: "Maisa", sukunimi : "Miettinen", aloitusvuosi : 1993}
    ]);

    const rivit = opiskelijat.map((m, i) => <Rivi key={i} etunimi={m.etunimi} sukunimi={m.sukunimi} aloitusvuosi={m.aloitusvuosi} /> )

    return (
        <ul>
            {rivit}
        </ul>
    )
}
 
const Rivi = (props) => {
    return (
        <li>{props.etunimi}, {props.sukunimi}, {props.aloitusvuosi}</li>
    );
}



export { Lista, Rivi}