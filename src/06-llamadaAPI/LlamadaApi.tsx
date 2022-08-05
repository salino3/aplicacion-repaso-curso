import React, {  useState } from "react";


const LlamadaApi = () => {

  const [name, setName] = useState('');
 let nameInput = ''
 const [argu, setArgu] = useState(nameInput)
 const [risp, setRisp] = useState(
   "<- como se llama el dragon de fuego que vuela de los pokemon?"
 );

  const getApi = (nombre: any) => {
     fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    // fetch(`https://pokeapi.co/api/v2/pokemon-species/aegislash`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data.results);
        setName(data.name);
      });
 
  };

  const handleChange = (event: any) => {
       setArgu(event.target.value.toLowerCase()); 

    if (event.target.value.toLowerCase() === "charizard"){
      setArgu('charizard'); 
      setRisp(  '¡Bravo!'  )}

   if (event.target.value.toLowerCase() !== "charizard"){
        setArgu(event.target.value); 
         setRisp("<- ¿Como se llama el dragón que vuela de los pokemon?");}
}
//
  getApi(argu);

  return (
    <>
      <h1>Hola desde LlamadaApi</h1>
      <br />
      <input
        title="title"
        type="text"
        defaultValue={""}
        value={argu}
        onChange={handleChange}
      />{" "}
      &nbsp; &nbsp;
     <span className="respuesta"> {name} </span> <span style={{color:"blue"}}> {risp}</span>
    
    </>
  );
};

export default LlamadaApi;
