import { createContext, useContext, useState } from "react";
import activitiesObj from "../utils/activitiesObj";

const defaultValue = {
  currentActivity: "wordSearch",
  setCurrentActivity: () => {},
  activitySettings: activitiesObj.wordSearch.defaultSettings,
  handleSettingChange: () => {}
};

export const SettingsContext = createContext(defaultValue);
export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider = ({ children }) => {
  const [currentActivity, setCurrentActivity] = useState("wordSearch");
  const [activitySettings, setActivitySettings] = useState(
    activitiesObj.wordSearch.defaultSettings
  );

  const handleSettingChange = (setting, value) => {
    setActivitySettings({
      ...activitySettings,
      [setting]: value
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        currentActivity,
        setCurrentActivity,
        activitySettings,
        handleSettingChange
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
