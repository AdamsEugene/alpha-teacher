import { ThemeInterface } from "./@types";
import night from "../../assets/images/background/night.jpg";
import pink from "../../assets/images/background/pink.jpg";
import sunset from "../../assets/images/background/sunset.jpg";
import sum from "../../assets/images/background/sum.jpg";

export const sizes = {
  font: {
    large: "2rem",
    medium: "0.95rem",
    small: "0.8rem",
  },
};

export const backgroundImage = {
  night,
  sum,
  sunset,
  pink,
};

const appTheme: {
  dark: ThemeInterface;
  light: ThemeInterface;
  custom: ThemeInterface;
} = {
  dark: {
    colors: {
      background: {
        primary: "rgb(15,19,26)",
        main: "rgb(52,195,255)",
        sidebar: "#383838",
        cards: "rgb(26,29,36)",
        buttons: {
          primary: "#377E80",
          secondary: "#FFFFFF",
        },
        mainDimmer: "#6EB5B74D",
        linear:
          "linear-gradient(180deg, rgba(55, 126, 128, 0.4) 0%, rgba(110, 181, 183, 0.4) 100%)",
        linear2: "linear-gradient(96.31deg, #00B0EF 7.57%, #00BBA0 96.87%)",
        warning: "rgba(255, 159, 67, 0.12)",
        success: "rgba(40, 199, 111, 0.12)",
        danger: "#FCECEA",
        lightDanger: "rgba(234, 84, 85, 0.12)",
      },
      border: {
        primary: "rgb(60,63,67)",
        success: "#46C740",
        danger: "#EA5455",
        active: "#6EB5B7",
      },
      text: {
        primary: "rgb(233,235,240)",
        success: "#46C740",
        danger: "#EA5455",
        warning: "#FF9F43",
        active: "#6EB5B7",
        secondary: "rgb(164,169,179)",
      },
      icon: {
        active: "#6EB5B7",
        primary: "#FFFFFF",
      },
      danger: {
        light: "#FCECEA",
        medium: "#EA5455",
      },
      success: {
        light: "#EAFBE7",
        medium: "#46C740",
      },
      info: {
        light: "#D7F2F5",
        medium: "#00CFE8",
      },
    },
    backgroundImage,
    sizes,
  },
  light: {
    colors: {
      background: {
        primary: "#F9F9F9",
        main: "#377E80",
        sidebar: "#FFFFFF",
        cards: "#FFFFFF",
        buttons: {
          primary: "#377E80",
          secondary: "#FFFFFF",
        },
        mainDimmer: "#377E804D",
        linear:
          "linear-gradient(180deg, rgba(55, 126, 128, 0.2) 0%, rgba(110, 181, 183, 0.2) 100%)",
        linear2: "linear-gradient(96.31deg, #00B0EF 7.57%, #00BBA0 96.87%)",
        warning: "rgba(255, 159, 67, 0.12)",
        success: "rgba(40, 199, 111, 0.12)",
        danger: "rgba(234,84,85,0.12)",
        lightDanger: "rgba(234, 84, 85, 0.12)",
      },
      border: {
        primary: "#E9ECEF",
        success: "#46C740",
        danger: "#EA5455",
        active: "#377E80",
      },
      text: {
        primary: "#6E6B7B",
        success: "#46C740",
        danger: "#EA5455",
        warning: "#FF9F43",
        active: "#377E80",
        secondary: "#BABFC7",
      },
      icon: {
        active: "#377E80",
        primary: "#6E6B7B",
      },
      danger: {
        light: "#FCECEA",
        medium: "#EA5455",
      },
      success: {
        light: "#EAFBE7",
        medium: "#46C740",
      },
      info: {
        light: "#D7F2F5",
        medium: "#00CFE8",
      },
    },
    backgroundImage,
    sizes,
  },
  custom: {
    colors: {
      background: {
        primary: "",
        main: "",
        sidebar: "",
        cards: "",
        mainDimmer: "",
        linear: "",
        linear2: "",
        warning: "",
        success: "",
        danger: "",
        lightDanger: "",
        buttons: {
          primary: "",
          secondary: "",
        },
      },
      border: {
        primary: "",
        success: "",
        danger: "",
        active: "",
      },
      text: {
        primary: "",
        success: "",
        danger: "",
        warning: "",
        active: "",
        secondary: "",
      },
      icon: {
        active: "",
        primary: "",
      },
      danger: {
        light: "",
        medium: "",
      },
      success: {
        light: "",
        medium: "",
      },
      info: {
        light: "",
        medium: "",
      },
    },
    backgroundImage,
    sizes,
  },
};

export default appTheme;
