import React, { useReducer, useState } from 'react';
import { elementUserProps, userProps, userProps2 } from './UserContext';
import {UserContext} from './UserContext';

interface props {
  children: JSX.Element | JSX.Element[];
}

// interface userProps {
//   id: number,
//   name: string,
//   email: string
// }

const users: userProps = {
  users: [
    {
      id: 123,
      name: "Carlos Torres",
      email: "ctorres@gmail.com",
    },
    {
      id: 777,
      name: "Marcos Torres",
      email: "mtorres@gmail.com",
    },
  ],
};

//
const todoReducer = (state: any, action: any): userProps | any => {
  return ("buenas");
};

const UserProvider = ({children}: props) => {

 const [todoState, dispatch] = useReducer(todoReducer, users);

// const [first, setFirst] = useState<userProps>(user);


  return (
    <>
      <UserContext.Provider value ={{todoState }}>
{children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider