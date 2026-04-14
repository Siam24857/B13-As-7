"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext();
 

export default function AuthProvider({ children }) {
  const [who, setwho] = useState([]); 
  const [tech, settech] = useState([]);
 

  return (
    
    <AuthContext.Provider value={{ who, setwho, tech, settech }}>
      {children}
    </AuthContext.Provider>
    
  );
}