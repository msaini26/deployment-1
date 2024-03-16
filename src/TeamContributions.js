import React from "react";
import Typography from "@mui/material/Typography";

export default function TeamContributions() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, fontFamily: "VerveAlt" }}
      >
        Team Contributions
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ mb: 5, fontFamily: "Soul" }}
      >
        Fern: Fern is one of our incredible game developers and Engine Lead who
        helped bring the game to life. He worked closely with Ashley to develop
        the level design and shader effects as seen through the player
        experience. Fern also worked with Ashley to create the core game
        mechanics, including the 'pull effect' that truly make the player
        experience unique.<br></br>
        <br></br>
        Ashley: Ashley is our production lead and core game developers on the
        vertical slice of Elevator Pitch. She worked closely with Fern to create
        the level design and player experience come to life. She also kept the
        team accountable making sure that the team remained on track for each
        design sprint. Ashley also worked with Fern to make the 'pull effect'
        and overall core game mechanics that truly make Elevator Pitch an
        incredbile game to play.<br></br>
        <br></br>
        Mansi: Mansi is our Design Lead and guided the user experience and user
        interface design through a series of design iterations on game
        aesthetics. She developed a series of moodboards, color palettes, and
        player flows to steer the game design direction. She also developed the
        deployment prototypes and archival website to allow players to
        experience Elevator Pitch themselves. <br></br>
        <br></br>
        Rebecca: Rebecca is our Tools Lead and helped develop the splash
        experience for the vertical Slice of Elevator Pitch. She created the
        amazing main menu, immersing the player immediately in the game from the
        start. She also created the menu options that allow the players to
        customize their experiences and designed assets for our one-hand mode.{" "}
        <br></br>
        <br></br>
        Thanh: Thanh helped create the localization kit ensuring that players
        are able to play the vertical slice of Elevator Pitch in both US English
        and Chinese (Simplified). She also created a sample splash experience
        prototype, which helped align our game aesthetics with the user
        experience design of Elevator Pitch.<br></br>
      </Typography>
    </div>
  );
}
