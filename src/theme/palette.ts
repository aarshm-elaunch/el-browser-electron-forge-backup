import { alpha, PaletteOptions } from "@mui/material/styles";

// SETUP COLORS
const PRIMARY = {
  light: "#D3E3FD",
  main: "#1967D2",
  dark: "#2B2B2B",
};
const SECONDARY = {
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
};
const INFO = {
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#4389B0",
};
const SUCCESS = {
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
};
const WARNING = {
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
};
const ERROR = {
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: "#fff", neutral: GREY[300] },
    action: { active: GREY[600] },
  } as PaletteOptions,
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500] },
  } as PaletteOptions,
};

export default palette;
