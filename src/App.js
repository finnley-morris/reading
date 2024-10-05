import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SettingsContextProvider from "./contexts/Settings";
import { themeObject } from "./theme/theme";
import Layout from "./components/Layout";

function App() {
  const theme = createTheme(themeObject);

  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <SettingsContextProvider>
          <Layout />
        </SettingsContextProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;
