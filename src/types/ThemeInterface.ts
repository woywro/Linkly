export interface ThemeInterface {
  mode: "dark" | "light";
  colors: {
    primary: string;
    secondary: string;
    yellow: string;
    green: string;
    red: string;
    gradient: string;
    primaryBg: string;
    secondaryBg: string;
    primaryText: string;
    secondaryText: string;
    active: string;
    active2: string;
  };
  shadow: string;
  fonts: string[];
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}
