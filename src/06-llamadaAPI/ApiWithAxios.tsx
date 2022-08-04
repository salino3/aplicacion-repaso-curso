// npm i axios
import axios from "axios";
import React, {  useState } from "react";

const ApiWithAxios = () => {

const [second, setSecond] = useState('');
// const [bravo, setBravo] = useState('')
const [tercero, setTercero] = useState('');

    const handleClick = (miPregunta: any) => {
        miPregunta = prompt('¿quien es el pokemon amarillo?')
        if (miPregunta.toLowerCase() === 'pikachu'){
      setSecond(miPregunta.toLowerCase());
     setTercero(" ¡Bravo!");  
      }
        if (miPregunta.toLowerCase() !== 'pikachu') {
// para resetear al clicar otra vez el botón
          setSecond("");
          setTercero("!No lo siento te equivocaste! Intentalo de nuevo..");
        }
    }

  const [name, setName] = useState('');

 const getApi = (nombre: any) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
// .then((res) => res.data.json())// con Axios lo convierte automaticamente
      .then((res) => {
        console.log("usando Axios: ", res.data);
        setName(res.data.name);
      });
    }

    getApi(second);
  return (
    <>
      <h1>Hola desde ApiWithAxios!</h1>
      <p>
        ~ {name} ~ <span style={{ color: "blue" }}>{tercero}</span>
      </p>
     
      <button onClick={(miPregunta) => handleClick(miPregunta)}>
        Envia pregunta
      </button>
      <br /> <br />
    </>
  );
};

export default ApiWithAxios;
