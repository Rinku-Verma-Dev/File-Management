import React from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, theme } from "./theme/theme";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Home toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

export default App;
