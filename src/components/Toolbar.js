import * as React from "react";
import {
  AppBar,
  IconButton,
  Toolbar as MuiToolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Toolbar = ({ handleToggleMenu }) => {
  return (
    <AppBar position="static">
      <MuiToolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Popit Word Search</Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={()=>handleToggleMenu(true)}
        >
          <MenuIcon />
        </IconButton>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
