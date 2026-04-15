"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext();
 

export default function AuthProvider({ children }) {
  const [who, setwho] = useState([]); 
  const [tech, settech] = useState([]);
  const [text, settext] = useState([])
  const [call, setcall] = useState([])
  const [video, setvideo] = useState([])


  console.log(text, call, video)
 

  return (
    
    <AuthContext.Provider value={{ who, setwho, tech, settech, text, settext, call, setcall, video, setvideo }}>
      {children}
    </AuthContext.Provider>
    
  );
}