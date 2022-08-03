import React from 'react';

interface Props {
    className: string,
    onClick: any,
    nombre: string
}

const Boton = ({className, onClick, nombre}: Props) => {
  return (
    <>
      <button 
      className={className} 
      onClick={onClick}>
      {nombre}
      </button>
    </>
  );
}

export default Boton