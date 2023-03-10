import { DefaultTheme } from "../../../interfaces/StylesInterface";

//styling for theme provider

export const theme: DefaultTheme = {
  colors: {
    background: "#fff",
    tetiear: "#30454C",
    primary: "#D39D5B",
    secondary: "#AD7A51",
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
