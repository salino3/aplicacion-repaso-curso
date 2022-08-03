import React, {  useState } from "react";



const Form = () => {


    const [second, setSecond] = useState('')
    const [tercer, setTercer] = useState('')
    

  

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const first = event.target.firstName.value;
    const surname = event.target.lastName.value;
    const nombreCompleto = [first, surname];
    console.log(`datos utente: ${first} ${surname}`);
    console.log(nombreCompleto);
    setSecond(''); 
    setTercer('');
  };

  const handlechange = (event: any) => {
    setSecond(event.target.value);
  }; 
  
  const handlechange2 = (event: any) => {
    setTercer(event.target.value);
  };
 

  return (
    <>
      <form id="myForm" onSubmit={handleSubmit}>
        <br /> <br />
        <input type="text" value={second} onChange={ handlechange} name="firstName" placeholder="Nombre.." />
        <br /> <br />
        <input type="text"   value={tercer} onChange={ handlechange2} name="lastName" placeholder="Apellido.." />
        <br /> <br />
        <button>Submit</button> <br /> 
        <hr />
        <button type="reset">Resetear</button> &nbsp; &nbsp;
        {/* con el 'input' aparece el texto predefinido  */}
        <input  type="reset" />
      </form>
    </>
  );
}

export default Form