const SHARED_CONSTANTS = {
  SERVICES: {},
  BASE_API_URL: {},
  LAYOUT: {
    FOOTER_HEIGHT: 1.5,
    TOOLBAR_HEIGHT: 3,
    SPECIAL_TOOLBAR_HEIGHT: 4,
    SIDEBAR_WIDTH_COLLAPSED: "4rem",
    SIDEBAR_WIDTH: "15rem",
    AVATAR_LARGE: "9rem",
    AVATAR_SMALL: "3rem",
    MEDIA_QUERIES: {
      MOBILE: "@media (max-width: 61rem)",
      TABLET: "@media (max-width: 72rem)",
      TABLET_PX: "@media only screen and (min-width: 768px)",
      MAX_TABLET_PX: "@media only screen and (max-width: 768px)",
      TABLET_PX_2:
        "@media only screen and (min-width: 768px) and (max-width: 1024px)",
      SMALL_PX: "@media only screen and (min-width: 418px)",
      TABLET_480_PX: "@media only screen and (min-width: 480px)",
      LAPTOP_M_PX: "@media only screen and (min-width: 1360px) ",
      LAPTOP_PX: "@media only screen and (min-width: 1024px) ",
      HEIGHT_440: "@media only screen and  (max-height : 440px) ",
      WIDTH_800: "@media only screen and  (max-width : 800px) ",
      WIDTH_550: "@media only screen and  (max-width : 500px) ",
      LANDSCAPE: "and (orientation : landscape)",
      BIG_SCREENS_PX: "@media only screen and (min-width: 1824px) ",
      LAPTOP_L_PX: "@media only screen and (min-width: 1440px)",
    },
    MEDIA_QUERIES_NUM: {
      // these are in pixels, based on the media queries right above. they're currently mainly for working with window widths in JS
      MOBILE: 976,
      TABLET: 1152,
    },
  },
  MISC: {
    EXPAND_SIDEBAR: "expand_sidebar",
    OTP_TIMER: "otp_timer",
    HIDE_SIDEBAR: "hide_sidebar",
  },
  EVENTS: {
    TOGGLE_SIDEBAR: "toggle_sidebar",
    TOGGLE_SIDEBAR_SHOW_SIDEBAR: "toggle_sidebar_show_sidebar",
  },
  STORAGE_KEYS: {
    REDUX_STATE: "alpha_redux_state",
    JWT_TOKEN: "jls-hepa-sudo-kupo-mxtr-redis_",
    THEME_KEY: "theme-key",
    IS_DEVICE_THEME: "is-device-theme",
  },
  LANGUAGE: {
    EN: "english",
    FR: "french",
  },
  DND_TYPES: {
    PROGRAM: "program",
    REMOVE: "remove",
  },
  PRESENT_COLORS: [
    "#6EB5B7",
    "#377E80",
    "#6EB5B74D",
    "#00B0EF",
    "#00BBA0",
    "#46C740",
    "#BD10E0",
    "#EA5455",
    "#4A90E2",
    "#EAFBE7",
    "#B8E986",
    "#000000",
    "#FF9F43",
    "#9B9B9B",
    "#FFFFFF",
    "#00CFE8",
  ],
};

export default SHARED_CONSTANTS;
