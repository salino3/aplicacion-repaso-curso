import React, { useEffect, useState } from 'react'

const Inicio = () => {
const [name, setName] = useState(null)

 useEffect(() => {
   fetch(
  "https://pokeapi.co/api/v2/pokemon/ditto"  
 ).then(data => data.json())
   .then(data =>{
    console.log(data)
     setName(data.name)})
 }, [])




  return (
    <>
    <h1>Hola desde Inicio</h1>
    {name}
    </>
  )
}

export default Inicio