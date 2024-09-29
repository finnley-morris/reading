import * as React from "react";
import {
  AppBar,
  IconButton,
  Toolbar as MuiToolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Toolbar = ({ openMenu, setOpenMenu }) => {
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <AppBar position="static">
      <MuiToolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h6">I Can Read!</Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
