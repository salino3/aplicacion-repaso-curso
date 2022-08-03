import React, { useState } from 'react';
import './segundo.css';

    

const Counter = () => {

    const [first, setFirst] = useState({
  counter1: 10,
  counter2: 20,
  counter3: 30
    })

const {counter1, counter2, counter3 } = first

const handleCounter2 = () =>{
  setFirst({
    ...first,
    counter2: counter2 + 1
  })
}

const handleCounter3 = () => {
  setFirst({
    ...first,
    counter3: counter3 + counter3 + counter1
  })
}

  return (
    <>
      <h1>Página Counters</h1>
      <hr />
      <div>
        <h3 className="counter1">
          Counter1: <span> {counter1}</span>{" "}
        </h3>
        <h3 className="counter2">
          Counter2:<span> {counter2} </span>
        </h3>
        <h3 className="counter3">
          Counter3:<span> {counter3}</span>{" "}
        </h3>
        <hr />

        <nav className="nav ">
          <button
            onClick={() =>
              setFirst({
                ...first,
                counter1: counter1 + 1,
              })
            }
            className="classButtons nav-link m-2 btn btn-outline-primary text-white"
          >
            1º +1
          </button>
          <button
            onClick={handleCounter2}
            className="classButtons nav-link m-2 btn btn-outline-warning text-white"
          >
            2º +1
          </button>
          <button
            onClick={handleCounter3}
            className=" nav-link m-2 btn btn-outline-success text-white  "
          >
            3º + 3º + 1º
          </button>
        </nav>
        <br />
        {
            Object.values(first).map((x: any) => (
                <p key={x}>{x} <hr /></p>
            ))
        }
      </div>
    </>
  );
}

export default Counter