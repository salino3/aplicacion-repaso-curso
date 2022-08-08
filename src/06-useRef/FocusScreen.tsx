import { useEffect, useRef } from "react";
import MutableRef from "./MutableRef";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const handleClick = () => {
   // document.querySelector().select();
    inputRef2.current?.select();
  };

  useEffect(() => {  
      inputRef.current?.select();  
  }, [])

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control mb-3"
        type="text"
        placeholder="Ingrese su nombre.."
      />{" "}
      <input
        ref={inputRef2}
        className="form-control input2"
        type="text"
        placeholder="Ingrese su nombre.."
      />
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Set focus 2º input
      </button>

      <br /> <br />
      <hr />
      <MutableRef />
    </>
  );
};
