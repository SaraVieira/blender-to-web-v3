import { useState, createContext, useContext } from "react";

const ColorContext = createContext();
function ColorProvider({ children }) {
  const [bodyColor, setBodyColor] = useState("#a3a195");
  const [abColor, setAbColor] = useState("#683344");
  const [buttonsColor, setButtonsColor] = useState("#242424");

  return (
    <ColorContext.Provider
      value={{
        bodyColor,
        setBodyColor,
        abColor,
        setAbColor,
        buttonsColor,
        setButtonsColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
}

export { ColorProvider, useColor };
