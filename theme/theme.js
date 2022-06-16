export default {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true,
  },

  colors: {
    text: "#f9fbf8",
    background: "#070f07",
    primary: "#07c",
    secondary: "#b0b",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#0cf",
        secondary: "#faf",
      },
    },
  },

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "sans-serif",
  },

  radii: [0, 4],

  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      p: 0,
      m: 0,
      overflow: "hidden",
    },

    a: {
      color: "primary",
      fontWeight: "bold",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },

  layout: {
    splash: {
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      transition: "all 0.13s linear",
      transform: "scale(1.1, 1.1)",
    },
  },

  buttons: {
    primary: {
      cursor: "pointer",
    },
  },
};
