import React, {  useState } from "react";
const LlamadaApi = () => {
  const [name, setName] = useState('');

  const getApi = (nombre: any) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then((data) => data.json())
      .then((data) => {   console.log(data.name);
        setName(data.name);});
 
  };

  getApi("charizard");

  return (
    <>
      <h1>Hola desde LlamadaApi</h1>
      {name}
    </>
  );
};

export default LlamadaApi;
