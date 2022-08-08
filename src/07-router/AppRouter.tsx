// npm install react-router-dom
import React from 'react';
import UserProvider from './components/context/UserProvider';
import Nav from './components/Nav';
import  Router  from './Router';
import './style.css';
const AppRouter = () => {


  return (
    <>
      <UserProvider>
        <Nav />

        <Router />
      </UserProvider>
    </>
  );
}

export default AppRouter