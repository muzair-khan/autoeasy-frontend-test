import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const MuiContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{maxWidth: {md: "1140px", sm: '100%'}, px: {md: 10, sm: 2, xs: 2}}} disableGutters>
        {children}
      </Container>
    </React.Fragment>
  );
};

export default MuiContainer;
