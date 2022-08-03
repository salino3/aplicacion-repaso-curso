import React, { useState } from "react";
import {UseCounter} from '../hooks/UseCounter';
import Boton from "./Boton";

import './tercerRep.css';


const CounterCustomHook = () => {

  const {  increment,  reset,  decrement, decrementUntill0 } = UseCounter();

  //
  const [first, setFirst] = useState({
    primerCounter: 2,
    segundoCounter:10,
    tercerCounter: 20,
  });

 const {
    primerCounter,
    segundoCounter,
    tercerCounter
  } = first

      const [newNum, setNewNum] = useState(segundoCounter);
      const [tercerNum, setTercerNum] = useState(tercerCounter);

const plus = () => {
  setFirst({ ...first, primerCounter: primerCounter + 5 });
};

const resetear = () => {
  setFirst({
    ...first,
    primerCounter: 2,
  });
};

const menos = () => {
  setFirst({ ...first, primerCounter: primerCounter - 1 });
};




  return (
    <>
      <h2 style={{ color: "#B5838D" }}>Creando Counter con CustomHook</h2>{" "}
      <hr />
      <nav className="nav ">
        <h3 className="nav-link rounded" style={{ color: "blue" }}>
          {" "}
          {primerCounter}
        </h3>
        <h1>|</h1>
        <h3 className="nav-link rounded" style={{ color: "orange" }}>
          {" "}
          {newNum}
        </h3>
        <h1>|</h1>
        <h3 className="nav-link rounded" style={{ color: "red" }}>
          {" "}
          {tercerNum}
        </h3>
      </nav>
      <br />
      {/* El 1º Sin CustomHook    */}
      <nav className="nav ">
        <Boton
          className={"nav-link m-2 rounded text-primary"}
          onClick={plus}
          nombre={"+ 5"}
        />
        <Boton
          className={"nav-link m-2 rounded text-primary"}
          onClick={resetear}
          nombre={"Reset"}
        />
        <Boton
          className={"nav-link m-2 rounded text-primary"}
          onClick={menos}
          nombre={"- 1"}
        />
      </nav>
      {/* Con CustomHook   */}
      <nav className="nav ">
        <Boton
          className={"nav-link m-2 rounded  text-warning "}
          onClick={() => increment(setNewNum, newNum, 5)}
          nombre={"+ 5"}
        />
        <Boton
          className={"nav-link m-2  text-warning"}
          onClick={() => reset(setNewNum, 10)}
          nombre={"Reset"}
        />
        <Boton
          className={"nav-link m-2 rounded text-warning"}
          onClick={() => decrement(setNewNum, newNum)}
          nombre={"- 1"}
        />
      </nav>
      {/* Con CustomHook   */}
      <nav className="nav ">
        <Boton
          className={"nav-link m-2 rounded text-danger"}
          onClick={() => increment(setTercerNum, tercerNum, 20)}
          nombre={"+ 10"}
        />
        <Boton
          className={"nav-link m-2 rounded text-danger"}
          onClick={() => reset(setTercerNum, 20)}
          nombre={"Reset"}
        />
        <Boton
          className={"nav-link rounded m-2 text-danger"}
          onClick={() => decrementUntill0(setTercerNum, tercerNum, 2)}
          nombre={"- 2"}
        />
      </nav>
      <br />
     
    
    </>
  );
};
    
export default CounterCustomHook;
