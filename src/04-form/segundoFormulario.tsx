import React, { useState } from 'react';
import Input from './Input';
import './style.css'



const SegundoFormulario = () => {
  const info = {
    username: "",
    email: "",
    password: "",
  };

  const [first, setFirst] = useState(info);
  //
  const handleChangeX = (event: any) => {
    //otra pción  setFirst(prev => ({ ...prev, [event.target.name]: event.target.value }))
    setFirst({ ...first, [event.target.name]: event.target.value });
  };
  //
  //* un elemento por vez..
  //  const handleChange = (event: any) => {
  //    setFirst({ ...first, username: event.target.value });
  //  };

  const Submit = (event: any) => {
    event.preventDefault();
    console.log(first.username);
    console.log(first.email);
    console.log(first.password);
    setFirst(info);

  };

  return (
    <>
      <h1>~ Formulario ~</h1>
      <br />
      <form onSubmit={Submit}>
        <Input
          name={"username"}
          onCh={handleChangeX}
          valueProps={first.username}
          typeInp="text"
          pl={"Escribe tu nombre.."}
          autoC={"username"}
        />
        <Input
          name={"email"}
          onCh={handleChangeX}
          valueProps={first.email}
          typeInp="email"
          pl={"Escribe tu email.."}
          autoC={"email"}
        />
        <Input
          name={"password"}
          autoC={"current-password"}
          typeInp="password"
          pl={"Password.."}
        />
        <br />
        <button onClick={() => setFirst(info)}>Resetear</button>
        <button type="submit">Click</button>
        {info.username}
      </form>
      <div className="nav">
        <span className="nav-link text-warning">~</span>
        <p className="nav-link text-warning">{first.username}</p>
        <span className="nav-link text-warning">~~~</span>
        <p className="nav-link text-warning">{first.email}</p>
        <span className="nav-link text-warning">~</span>
      </div>
    </>
  );
};

export default SegundoFormulario