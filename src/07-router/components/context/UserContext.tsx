// import React from 'react';

import { createContext } from "react";

export interface elementUserProps {
  id: number;
  name: string;
  email: string;
}

export interface userProps {
  users: elementUserProps[];
}

export interface userProps2 {
  todoState: userProps | any;
}

export const UserContext = createContext<userProps2>({} as userProps2);







