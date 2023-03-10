//data structur for styles

export interface Global {
  theme: {
    colors: {
      background: string;
      tetiear: string;
      primary: string;
      secondary: string;
    };
    breakpoints: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    development: {
      underDevelopment: boolean;
      border: string;
    };
  };
  rows?: string;
}
export interface Lines {
  length: number;
}
export interface NavProps {
  showBurger: boolean;
  showLogin: boolean;
}
export interface DefaultTheme {
  colors: {
    background: string;
    tetiear: string;
    primary: string;
    secondary: string;
  };
  breakpoints: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  development: {
    underDevelopment: boolean;
    border: string;
  };
}
