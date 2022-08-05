import React from 'react';
import File06LlamadaApi from './06-llamadaAPI/File06LlamadaApi';
//import SegundoFormulario from "./04-form/segundoFormulario";

//import GifApi from './06-llamadaAPI/GifApi'
//import ValidationFormulario from "./05-FormValidation/segundoFormularioValidation";
//
//import Counter from './02-segundoProyecto/Counter';
//import CounterCustomHook from './03-tercerRep/CounterCustomHook';
//import CounterCustomHook from './03-tercerRep/CounterCustomHook';
//import Form from './01-fromulario/Form';
import "./App.css";
//import Try from './Try';
//*import ProTypes from 'prop-types'

//


interface Props  {
  palabras: string
}


function App({ palabras}: Props) {


  return (
    <>
      <File06LlamadaApi />
      {/* <h1>Buenas</h1>
      <h2>{palabras} </h2> */}
    </>
  );
}

export default App;   




