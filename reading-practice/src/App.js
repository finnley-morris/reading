import * as React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Toolbar from "./components/Toolbar";

import { themeObject } from "./theme/theme";

function App() {
  const theme = createTheme(themeObject);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);

  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Toolbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default App;
