import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { themeObject } from "../theme/theme";
import { Box } from "@mui/material";

export default function Layout() {
  const theme = createTheme(themeObject);
  return (
    <ThemeProvider theme={theme}>
      <Box>charlie can read</Box>
    </ThemeProvider>
  );
}
