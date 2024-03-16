import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PrototypeResult from "./PrototypeResult";
import SceneFlow from "./SceneFlow";
import SplashExperience from "./SplashExperience";
import "./fade.css";
import { Button } from "@mui/material";
import ElevatorPitch from "./assets/Elevator_Pitch_Prototype.zip";
import ReactPlayer from "react-player";
// temp video removal
// import walkthrough from "./assets/walk.mp4";

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
import { createTheme } from "@mui/material";
import UnityUpdates from "./UnityUpdates";

const gradientStyle = {
  background: `#8B0000`,
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

// function will download a zip file of elevator pitch prototype
const downloadPrototype = () => {
  // using js fetch method to download elevator pitch zip file
  fetch(ElevatorPitch).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);

      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Elevator_Pitch.zip";
      alink.click();
      console.log("Downloading Elevator Pitch prototype...");
    });
  });
};

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.primary"
      align="center"
      sx={{ fontFamily: "VerveAlt" }}
    >
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
          <Typography
            variant="h2"
            component="h1"
            sx={{ mb: 5, fontFamily: "VerveRegular" }}
          >
            Elevator Pitch Archival Website
          </Typography>

          {/* download game here */}
          <Typography
            variant="body1"
            align="left"
            sx={{ mb: 5, fontFamily: "Chop", letterSpacing: "3px" }}
          >
            Welcome to Elevator Pitch! Click the download button below to
            download the interactive Unity prototype of Elevator Pitch.
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ mb: 5, fontFamily: "Chop", letterSpacing: "3px" }}
          >
            1. Click the download button below to download the interactive Unity
            prototype of Elevator Pitch.
            <br></br>
            <strong>
              <i>
                Note: It may take a second to download depending on your
                internet speed.
              </i>
            </strong>
            <br></br>
            <br></br>
            2. Unzip the downloaded folder.
            <br></br>
            <br></br>
            3. Open the unzipped folder and double click on the{" "}
            <strong>
              <code>Elevator Pitch.exe </code>
            </strong>
            file to run the prototype.
            <br></br>
            <br></br>
            4. Use your mouse or trackpad to experiment in the prototype
            environment. Enjoy! 🎉
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mb: 5,
              fontSize: "20px",
              fontFamily: "TitaniaRegular",
              textTransform: "none",
            }}
            onClick={downloadPrototype}
            value="download"
            style={gradientStyle}
          >
            Download Prototype
          </Button>

          {/* Project Overview */}
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontFamily: "VerveAlt" }}
          >
            Project Overview
          </Typography>

          <Typography
            variant="body1"
            align="left"
            sx={{ mb: 5, fontFamily: "Soul" }}
          >
            Elevator Pitch is an interactive game, created by Rebecca Zhao,
            Mansi Saini, Fernando Alcazar, Ashley Perez, and Thanh To, where
            players navigate a series of rooms with distorted gravity effects.
            Currently, the game documentation you will see here is for the
            vertical slice of Elevator Pitch. In the following section, you can
            see a series of videos from our vertical slice that show an example
            player going through the player experience.
          </Typography>

          {/* video walkthrough */}
          {/* <video width="500" height="300" controls src={walkthrough}></video> */}

          {/* prototype design documentation */}
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontFamily: "VerveAlt" }}
          >
            Vertical Slice Design Documentation
          </Typography>

          <Typography
            variant="body1"
            align="left"
            sx={{ mb: 5, fontFamily: "Soul" }}
          >
            This is an example of our game with further shading, color palettes,
            and design elements included through Unity. The following
            documentation will provide a detailed look into prototypes developed
            along the way.
          </Typography>

          <UnityUpdates />
          <Typography
            variant="body1"
            align="left"
            sx={{ mb: 5, fontFamily: "Soul" }}
          >
            This is the first interactive prototype deployment of Elevator
            Pitch.
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
