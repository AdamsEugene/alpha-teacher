import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeInterface } from "./@types";
import appTheme, { sizes, backgroundImage } from "./appTheme";
import K from "../constants";
import useRedux from "../../context/useRedux";

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export interface IThemes {
  theme: "light" | "dark" | "custom" | "device";
  deviceTheme: boolean;
  toggleTheme: (
    newTheme: "light" | "dark" | "custom" | "device",
    deviceTheme?: boolean,
    removeFromStorage?: boolean
  ) => void;
  appTheme: ThemeInterface;
}

export const ThemeContext = React.createContext<IThemes>({
  theme: "light",
  deviceTheme: true,
  toggleTheme: () => null,
  appTheme: appTheme.light,
});

type Theme = "device" | "dark" | "light" | "custom";

function getTheme(newTheme: Theme): Theme {
  return newTheme === "device"
    ? prefersDarkTheme.matches
      ? "dark"
      : "light"
    : newTheme;
}

export const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [theme, setTheme] = React.useState(() => {
    const currentTheme = localStorage.getItem(K.STORAGE_KEYS.THEME_KEY) as
      | "light"
      | "dark"
      | "custom"
      | "device"
      | null;

    return currentTheme
      ? currentTheme
      : prefersDarkTheme.matches
      ? "dark"
      : "light";
  });
  const { state } = useRedux();

  const [isDeviceTheme, setIsDeviceTheme] = React.useState<boolean>(() => {
    const isUsingDeviceTheme = localStorage.getItem(
      K.STORAGE_KEYS.IS_DEVICE_THEME
    );
    return isUsingDeviceTheme ? Boolean(JSON.parse(isUsingDeviceTheme)) : true;
  });

  const selectedTheme = React.useMemo(
    () =>
      theme === "light"
        ? appTheme.light
        : theme === "dark"
        ? appTheme.dark
        : state.theme || appTheme.custom,
    [state.theme, theme]
  );

  const toggleTheme = useCallback(
    (
      newTheme: "light" | "dark" | "custom" | "device",
      deviceTheme?: boolean,
      removeFromStorage?: boolean
    ) => {
      const selectedTheme = getTheme(newTheme);
      setIsDeviceTheme(!!deviceTheme);
      setTheme(selectedTheme);
      !removeFromStorage &&
        localStorage.setItem(K.STORAGE_KEYS.THEME_KEY, selectedTheme);
      localStorage.setItem(
        K.STORAGE_KEYS.IS_DEVICE_THEME,
        JSON.stringify(!!deviceTheme)
      );
    },
    []
  );

  useEffect(() => {
    function handler(event: MediaQueryListEvent) {
      toggleTheme(event.matches ? "dark" : "light", true, true);
    }
    prefersDarkTheme.addEventListener("change", handler);
    return () => prefersDarkTheme.removeEventListener("change", handler);
  }, [toggleTheme]);

  return (
    <ThemeProvider
      theme={{
        ...selectedTheme,
        isDark: theme === "dark",
        sizes,
        backgroundImage,
      }}
    >
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          deviceTheme: isDeviceTheme,
          appTheme: selectedTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
