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
import activityObj from "../constants/activitiesObj";
import { useSettingsContext } from "../contexts/Settings";

const NavMenu = ({ openMenu, handleToggleMenu }) => {
  const { currentActivity, activitySettings, handleSettingChange } =
    useSettingsContext();
  const currentActivitySettings = activityObj[currentActivity].settings;
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
          {Object.keys(currentActivitySettings).map((setting) => (
            <div key={setting}>
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
                    {currentActivitySettings[setting].icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={currentActivitySettings[setting].label}
                  />
                </ListItemButton>
              </ListItem>
              <Collapse
                in={activeSubLists[setting]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {currentActivitySettings[setting].options.map((option) => {
                    const isActive = option.value === activitySettings[setting];
                    return (
                      <ListItem
                        key={option.value}
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
                                "&:hover": { backgroundColor: "secondary.dark" }
                              }
                            : {}
                        }
                      >
                        <ListItemText primary={option.label} />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </div>
          ))}
          {/* ToDo: More Activities */}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavMenu;
