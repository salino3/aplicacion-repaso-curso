import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'
import Pagina3 from './components/Pagina3'

const Router = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pag2" element={<Pagina2 />} />
          <Route path="/pag3" element={<Pagina3 />} />
          <Route path="*" element={<h1> * Error Not Found *</h1>} />
        </Routes>
    </>
  );
}

export default Router