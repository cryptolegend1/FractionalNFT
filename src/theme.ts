import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    background: {
      default: "rgb(244, 245, 246)",
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: "32px",
      lineHeight: "32px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    h3: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    h5: {
      fontSize: "12px",
      lineHeight: "16px",
    },
    h6: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "10px",
      lineHeight: "13px",
      fontWeight: 700,
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: "30px 16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        icon: {
          color: "#2e7d32",
        },
      },
    },
  },
});

export default theme;
