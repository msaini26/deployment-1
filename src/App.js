import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PrototypeResult from "./PrototypeResult";
import SceneFlow from "./SceneFlow";
import SplashExperience from "./SplashExperience";

// font importing
import "./font.css";
import "./fonts/Verve.ttf";
import "./fonts/VerveAlternate.ttf";
import "./fonts/VerveShadow.ttf";
import "./fonts/Titania-Outline.ttf";
import "./fonts/Titania-Shadow.ttf";
import "./fonts/Titania-Regular.ttf";
import "./fonts/Book.otf";
import "./fonts/Chopper.ttf";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Elevator Pitch {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 5, fontFamily: "VerveRegular"}}>
          Elevator Pitch Deployment #1
        </Typography>

        <Typography variant="h4" component="h1" sx={{ mb: 2, fontFamily: "VerveAlt" }}>
          Prototype Design Documentation
        </Typography>
        <Typography variant="body1" align="left" sx={{ mb: 5, fontFamily: "Chop"}}>
          This is the first interactive prototype deployment of Elevator Pitch.
          The following documentation will provide a detailed look into
          prototypes developed along the way.
        </Typography>
        <PrototypeResult />

        <SceneFlow />

        <SplashExperience />

        <Copyright />
      </Box>
    </Container>
  );
}
