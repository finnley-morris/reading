import * as React from "react";
import {
  AppBar,
  IconButton,
  Toolbar as MuiToolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import activitiesObj from "../constants/activitiesObj";
import { useSettingsContext } from "../contexts/Settings";

const Toolbar = ({ handleToggleMenu }) => {
  const { currentActivity } = useSettingsContext();
  const activityTitle = activitiesObj[currentActivity].title;

  return (
    <AppBar position="static">
      <MuiToolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{activityTitle}</Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => handleToggleMenu(true)}
        >
          <MenuIcon />
        </IconButton>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
