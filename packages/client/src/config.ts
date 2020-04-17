import { createMuiTheme } from "@material-ui/core/styles";
import { orange, grey } from "@material-ui/core/colors";

export const config = {
  baseUrl: "http://localhost:4000",
  timeBeforeMessageClosing: 3000,
  theme: createMuiTheme({
    palette: {
      primary: {
        main: orange[500],
        light: grey[50],
        contrastText: grey[50],
      },
      secondary: {
        main: grey[900],
      },
    },
  }),
};
