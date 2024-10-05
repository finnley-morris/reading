import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import NavMenu from "./NavMenu";
import Toolbar from "./Toolbar";
import activitiesObj from "../constants/activitiesObj";
import { useSettingsContext } from "../contexts/Settings";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentActivity } = useSettingsContext();

  const handleToggleMenu = (newState) => {
    setOpenMenu(newState);
  };
  return (
    <>
      <NavMenu openMenu={openMenu} handleToggleMenu={handleToggleMenu} />
      <Grid container spacing={2}>
        <Grid size={12}>
          <Toolbar handleToggleMenu={handleToggleMenu} />
        </Grid>
        <Grid size={12}>{activitiesObj[currentActivity].matElement}</Grid>
      </Grid>
    </>
  );
};

export default Layout;
