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

const gradientStyle = {
  background: `#8B0000`,
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default function SplashExperience() {
  return (
    <Stack spacing={2} direction="column" sx={{ mb: 5 }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="50%"
          image={elevator}
          alt="prototype result"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "VerveAlt" }}
          >
            Lo-fi Splash Experience Prototype #1
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: "Soul" }}
          >
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
            cannot do. Some design questions we asked were the following:
            <ul>
              <li>
                How might we create a simplified user interface that immediately
                immerses the player in the game itself?
              </li>
              <li>
                How can we emulate the theme of an elevator in the initial user
                experience? Essentially, how can we make the player feel like
                they are walking into the elevator/game itself?
              </li>
              <li>
                How can we display the game buttons in a way that is clear and
                intuitive for a user with one mouse as a controller?
              </li>
              <li>
                How can we clearly differentiate the UI for when the player is a
                new player and when they are a returning user?
              </li>
            </ul>
            Some knowledge we gained was the following:
            <ul>
              <li>
                We learned that utilizing clearer visuals, instead of explicit
                directions, enabled the player to learn through play.
              </li>
              <li>
                Having less text in the initial introduction created space for
                the player to ‘experiment’ and understand the controls before
                being thrown in the initial game loop.
              </li>

              <li>
                We learned that our prototype can be creative and functional, so
                we did a good amount of research into trying to make a prototype
                that is appropriately themed for our game and would be something
                we’d be interested in moving forward with.
              </li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={gradientStyle}
            sx={{ fontFamily: "Soul", textTransform: "none" }}
            size="medium"
            href="https://docs.google.com/presentation/d/1KeAFnGHqhnmGRMcILBtH0Q_eFOqnS4ww0UTovrFcXVI/edit?usp=sharing"
          >
            View Full Experience
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="50%"
          image={elevatorTwo}
          alt="another prototype"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "VerveAlt" }}
          >
            Lo-fi Splash Experience Prototype #2
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: "Soul" }}
          >
            For this splash experience, we wanted to focus more on guiding the
            player and giving them more context not only about the story/world
            they are in but also instructing the player on what the objective
            is. We are still unsure how much story will be in our game but we
            think including some of it in the beginning would help with
            immersion and give the player some incentive to continue. We will
            most likely use a blend of the two prototypes in our final vertical
            slice. Some design questions we asked were the following:
            <ul>
              <li>
                How does the gameplay change if we add specific instructions to
                the game?
              </li>
              <li>
                How would adding more text restrict the player from playing
                freely?
              </li>
              <li>
                What if we changed the color scheme to be completely opposite of
                the feeling/vibe of the game?
              </li>
              <li>
                Would adding more textual context enhance or detriment player
                experience?
              </li>
            </ul>
            Some knowledge we gained was the following:
            <ul>
              <li>
                This version of quickly drawing the flow in Google Slides is
                very useful and quick. It’s easier to make changes and feels
                more low stakes compared to having something done in Unity (if
                we had to change something it would be more time-consuming.
              </li>
              <li>
                We also found that keeping the text minimal is better than
                overflowing the user with information. This way, it not only
                gives them more freedom but also allows them to experience the
                game for themselves without being restricted
              </li>

              <li>
                We learned that the UI and Splash experience of our game curates
                an environment for players to anticipate what to expect from our
                game
              </li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={gradientStyle}
            sx={{ fontFamily: "Soul", textTransform: "none" }}
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
