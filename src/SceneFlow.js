import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import sceneFlowOne from "./assets/Scene Flow.png";
import sceneFlowTwo from "./assets/Scene Flow Prototype 2.png";

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const gradientColors = [
  "hsla(24, 100%, 50%, 1) 10%",
  "hsla(37, 100%, 48%, 1) 37%",
  "hsla(45, 100%, 50%, 1) 69%",
  "hsla(60, 100%, 50%, 1) 100%",
];

const gradientStyle = {
  background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default function SceneFlow() {
  return (
    <Stack spacing={2} direction="column" sx={{ mb: 5 }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="100%"
          image={sceneFlowOne}
          alt="prototype result"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "VerveAlt" }}
          >
            Scene Flow Lo-fi Prototype #1
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: "Soul" }}
          >
            The Figma scene flow prototype, which was created in Figma, shows
            the gameplay loops as if the elevator was not the main core
            component of the game. The elevator is mainly used as a means to
            transition between each level/floor and is also used as a quick
            break for the player to rest. The main concept is that once you
            leave the elevator, you cannot go back inside and must find the exit
            elevator to leave the floor. Through this, we want to test how
            gameplay will be affected by not providing a safe space for the
            player to run back to while trying to find the next exit. Without
            providing a safe space, we also think that this will save up a lot
            of time on the actual core gameplay because they wouldn’t have the
            option to continuously run back to a specific location. This would
            force the player to proceed forward and continue to explore what’s
            ahead.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ fontFamily: "Soul" }}
            style={gradientStyle}
            size="medium"
            href="https://www.figma.com/file/hJwAMEw4vAEteGg13QZVST/Scene-Flow-Prototype-1?type=whiteboard&node-id=0%3A1&t=e1mznuJ6DbGly71K-1"
          >
            View Full Prototype
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="100%"
          image={sceneFlowTwo}
          alt="another prototype"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "VerveAlt" }}
          >
            Scene Flow Lo-fi Prototype #2
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: "Soul" }}
          >
            This scene flow FigJam prototype explains the core gameplay logic as
            if the elevator was the core root of the game itself. Essentially,
            the player can run back into the elevator at any point during the
            game without losing their game progress or being affected by any
            enemies that may cross their path. This game flow is especially
            helpful for beginners or new players who want to “test the waters”
            of the game without diving headfirst into the experience. The
            initial game flow will remain the same where a title screen,
            instruction page, and settings area are included for the player.
            Once the players transition to the game, they will spawn inside of
            the “safe elevator” with the option to select a level. As the player
            progresses through the game, more level options will be added,
            allowing them to either move to the next level or replay some of the
            older challenges. Suppose it’s the player’s first time playing the
            game. In that case, the first level will be a tutorial allowing the
            player to discover the game mechanics and movement functionalities
            they have access to. Also, the elevator buttons will be round
            rectangular buttons with a mysterious scripture and an English
            translation titled “Level X: Name of the Level” where each level
            name is unique. In addition, by making the elevator the main game
            root, the gameplay experience might be more leisurely as the player
            can take their time exploring the levels and taking breaks when
            needed.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ fontFamily: "Soul" }}
            style={gradientStyle}
            size="medium"
            href="https://www.figma.com/file/To9jX7TeacyNwx92G6ZzRV/Scene-Flow-Prototype-2?type=whiteboard&node-id=1%3A2&t=LZdU8L6tSAib1JnV-1"
          >
            View Full Prototype
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
