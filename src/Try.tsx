import React, { useState } from 'react';
import { UseCounter } from "./hooks/UseCounter";


const Try = () => {

      const {
        ejemplo,
        setEjemplo,
        reset,
        increment,
        first,
        setFirst,
        counter,
        setCounter,
        decrement,
      } = UseCounter();

      const [second, setSecond] = useState(4)
  return (
    <>
      {counter}
      <div>Try</div>
      {first} -- {second} -- {ejemplo}
      <button onClick={() => increment(setSecond, second, 5)}>num</button>
      <button onClick={() => reset(setSecond)}>reset</button>
    </>
  );
}

export default Try