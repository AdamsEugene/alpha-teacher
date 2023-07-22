export interface ThemeInterface {
  colors: {
    background: {
      primary: string;
      main: string;
      sidebar: string;
      cards: string;
      danger: string;
      buttons: {
        primary: string;
        secondary: string;
      };
      mainDimmer: string;
      linear: string;
      linear2: string;
      warning: string;
      success: string;
      lightDanger: string;
    };
    border: {
      primary: string;
      success: string;
      danger: string;
      active: string;
    };
    text: {
      primary: string;
      success: string;
      danger: string;
      warning: string;
      active: string;
      secondary: string;
    };
    icon: {
      active: string;
      primary: string;
    };
    danger: {
      light: string;
      medium: string;
    };
    success: {
      light: string;
      medium: string;
    };
    info: {
      light: string;
      medium: string;
    };
  };
  backgroundImage: {
    night: string;
    sum: string;
    sunset: string;
    pink: string;
  };
  sizes: {
    font: {
      large: string;
      medium: string;
      small: string;
    };
  };
}
