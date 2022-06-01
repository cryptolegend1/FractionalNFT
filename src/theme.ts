import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
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
    h6: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "10px",
      lineHeight: "12px",
      fontWeight: 700,
      color: "rgb(143, 151, 163)",
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
  },
});

export default theme;
