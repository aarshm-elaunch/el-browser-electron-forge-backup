import { ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultSettings } from "../config";

// ----------------------------------------------------------------------

const SettingsContext = createContext(null);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: defaultSettings.themeMode,
  });

  const onChangeDarkMode = () => {
    setSettings({
      ...settings,
      themeMode: "dark",
    });
  };
  const onChangeLightMode = () => {
    setSettings({
      ...settings,
      themeMode: "light",
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeDarkMode,
        onChangeLightMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
