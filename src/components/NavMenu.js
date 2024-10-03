import * as React from "react";
import { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse
} from "@mui/material";
import activityObj from "../utils/activitiesObj";

const NavMenu = ({
  openMenu,
  handleToggleMenu,
  currentActivity,
  activitySettings,
  handleSettingChange
}) => {
  const wordSearchSettings = activityObj[currentActivity].settings;
  const [activeSubLists, setActiveSubLists] = useState({
    wordLength: false,
    gridSize: false
  });

  return (
    <Drawer open={openMenu} onClose={() => handleToggleMenu(false)}>
      <Box role="presentation">
        {/*Current activity options*/}
        <List
          subheader={
            <ListSubheader component="div">Activity Settings</ListSubheader>
          }
        >
          {Object.keys(wordSearchSettings).map((setting) => (
            <>
              <ListItem
                disablePadding
                onClick={() =>
                  setActiveSubLists({
                    ...activeSubLists,
                    [setting]: !activeSubLists[setting]
                  })
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    {wordSearchSettings[setting].icon}
                  </ListItemIcon>
                  <ListItemText primary={wordSearchSettings[setting].label} />
                </ListItemButton>
              </ListItem>
              <Collapse
                in={activeSubLists[setting]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {wordSearchSettings[setting].options.map((option) => {
                    const isActive = option.value === activitySettings[setting];
                    return (
                      <ListItem
                        button
                        onClick={() => {
                          console.log(option.value);
                          handleSettingChange(setting, option.value);
                          setTimeout(() => {
                            setActiveSubLists({
                              ...activeSubLists,
                              [setting]: false
                            });
                          }, 300);
                        }}
                        sx={
                          isActive
                            ? {
                                backgroundColor: "secondary.main",
                                color: "white",
                                "&:hover": { backgroundColor: "secondary.dark"}

                              }
                            : {}
                        }
                      >
                        <ListItemText
                          primary={option.label}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </>
          ))}
          {/* ToDo: More Activities */}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavMenu;
