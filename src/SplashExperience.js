import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import elevator from "./assets/elevator.png";
import elevatorTwo from "./assets/elevator2.png";

export default function SplashExperience() {
  return (
    <Stack spacing={2} direction="column" sx={{ mb: 5 }}>
      <Card sx={{ maxWidth: "100%", paddingBottom: '10%' }}>
        <CardMedia
          component="img"
          height="50%"
          image={elevator}
          alt="prototype result"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lo-fi Splash Experience Prototype #1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This prototype shows how we want our opening scene to look like. It
            helps show what kind of animations and color schemes we would like
            to implement in the actual game. We also considered what to include
            while the game is loading as well to make it seem more entertaining
            and not just a plain black screen with a loading icon. We decided to
            make it look like you are going up an elevator in percentages until
            the game is fully loaded. We also wanted to include the initial
            setting controls in the beginning scenes so the players could adjust
            whatever they needed to help them have the best gameplay experience.
            For this prototype, we wanted to limit the amount of context/text to
            include in the instructions/guide. This way, it gives the player
            more freedom and also allows them to explore with an open mind
            freely. We didn’t want to restrict the players in what they can or
            cannot do.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            href="https://docs.google.com/presentation/d/1KeAFnGHqhnmGRMcILBtH0Q_eFOqnS4ww0UTovrFcXVI/edit?usp=sharing"
          >
            View Full Experience
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "100%", paddingBottom: '10%' }}>
        <CardMedia
          component="img"
          height="50%"
          image={elevatorTwo}
          alt="another prototype"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lo-fi Splash Experience Prototype #2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            For this splash experience, we wanted to focus more on guiding the
            player and giving them more context not only about the story/world
            they are in but also instructing the player on what the objective
            is. We are still unsure how much story will be in our game but we
            think including some of it in the beginning would help with
            immersion and give the player some incentive to continue. We will
            most likely use a blend of the two prototypes in our final vertical
            slice.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            href="https://docs.google.com/presentation/d/1LCjqDY8Ir3v4ui2sQAnvHZahFNn-bjr8w1r-V_HJ8ws/edit?usp=sharing"
          >
            View Full Experience
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
