import React, { useContext } from 'react';
import { UserContext,  userProps2 } from './context/UserContext';

const Pagina1 = () => {

 //const {hola, user} = useContext(UserContext)
     const { todoState } = useContext<userProps2>(UserContext);
     const { users } = todoState;

  return (
    <>
      <h1>Pagina1</h1>

  <p>Datos users:</p>
      {JSON.stringify(users)}
    </>
  );
}

export default Pagina1