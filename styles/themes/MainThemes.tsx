import { DefaultTheme } from "../../../interfaces/StylesInterface";

export const theme: DefaultTheme = {
  colors: {
    background: "#fff",
    dark: "#000000",
    primary: "#fed9c9",
    secondary: "#af7627",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  development: {
    underDevelopment: false,
    border: "border: solid 2px #fff",
  },
};
