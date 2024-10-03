import * as React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Toolbar from "./components/Toolbar";

import { themeObject } from "./theme/theme";
import NavMenu from "./components/NavMenu";
import activitiesObj from "./utils/activitiesObj";

function App() {
  const currentActivity = "wordSearch";
  const theme = createTheme(themeObject);
  const [openMenu, setOpenMenu] = useState(false);
  const [activitySettings, setactivitySettings] = useState(
    activitiesObj[currentActivity].defaultSettings
  );

  const handleToggleMenu = (newState) => {
    setOpenMenu(newState);
  };

  const handleSettingChange = (setting, value) => {
    setactivitySettings({
      ...activitySettings,
      [setting]: value
    });
  };

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);

  useEffect(() => {
    console.log(activitySettings);
  }, [activitySettings]);

  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <NavMenu
          openMenu={openMenu}
          handleToggleMenu={handleToggleMenu}
          handleSettingChange={handleSettingChange}
          currentActivity="wordSearch"
          activitySettings={activitySettings}
        />
        <Grid container spacing={2}>
          <Grid size={12}>
            <Toolbar openMenu={openMenu} handleToggleMenu={handleToggleMenu} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default App;
