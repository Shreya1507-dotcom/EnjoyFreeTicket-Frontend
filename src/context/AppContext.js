
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  console.log("Contextprofile",profile)

  return (
    <AppContext.Provider value={{ profile, setProfile }}>
      {children}
    </AppContext.Provider>
  );
};
