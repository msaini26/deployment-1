import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PrototypeResult from "./PrototypeResult";
import SceneFlow from "./SceneFlow";
import SplashExperience from "./SplashExperience";
import "./fade.css";

// font importing
import "./font.css";
import "./fonts/Verve.ttf";
import "./fonts/VerveAlternate.ttf";
import "./fonts/VerveShadow.ttf";
import "./fonts/Titania-Outline.ttf";
import "./fonts/Titania-Shadow.ttf";
import "./fonts/Titania-Regular.ttf";
import "./fonts/Book.otf";
import "./fonts/LTSoul-Regular.otf";


const gradientStyle = {
  background: `#8B0000`,
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.primary" align="center" sx={{fontFamily: "VerveAlt"}}>
      {"Copyright © "}
      Elevator Pitch {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <FadeInSection>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 5, fontFamily: "VerveRegular"}}>
          Elevator Pitch Archival Website
        </Typography>

        <Typography variant="h4" component="h1" sx={{ mb: 2, fontFamily: "VerveAlt" }}>
          Prototype Design Documentation
        </Typography>
        <Typography variant="body1" align="left" sx={{ mb: 5, fontFamily: "Soul"}}>
          This is the first interactive prototype deployment of Elevator Pitch.
          The following documentation will provide a detailed look into
          prototypes developed along the way.
        </Typography>
        <PrototypeResult />

        <SceneFlow />

        <SplashExperience />

        <Copyright />
      </Box>
      </FadeInSection>
    </Container>
  );
}
