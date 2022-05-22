import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
  const [inputState, setInputState] = useState("");

  return (
    <InputContext.Provider value={{ inputState, setInputState }}>
      {children}
    </InputContext.Provider>
  );
};
