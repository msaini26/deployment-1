import React from "react";
import Typography from "@mui/material/Typography";
import LocalImgs from "./LocalImgs";


export default function Local() {
  return (
    <div>
      {/* Localization */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, fontFamily: "VerveAlt" }}
      >
        Localization Support
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ mb: 5, fontFamily: "Soul" }}
      >
        Elevator Pitch is designed to be localized for players in varying
        regions. Currently, our game supports the following languages:
        <ul>
          <i>
            <li>US English</li>
            <li>Chinese (Simplified)</li>
          </i>
        </ul>
      </Typography>

      <LocalImgs />

      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 2, fontFamily: "VerveAlt" }}
      >
        How did we address localization?
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ mb: 5, fontFamily: "Soul" }}
      >
        We decided that we wanted to have different installable builds to
        support different languages. Going about localization for this was
        pretty simple as we want to have two different builds and we are using
        GitHub to manage our project. We branched from our main branch, already
        in English, and manually translated all the text to Chinese. We intend
        to build each language build separately and give the user access to
        every language we offer during the installation process.
        <br></br>
        <br></br>We mainly had to find a font to support Chinese and had Unity
        generate the font atlas. Unity was missing a lot of the characters we
        needed when generating the font atlas, so we set the generation of the
        font atlas to include special characters and manually added each
        character we needed for the text. From there we modified the text and
        just changed the font to display the language properly. For the
        translation to Chinese, we mainly utilized an AI agent to generate the
        correct translation given the situation and friends who are familiar
        with the language to double-check our work.
      </Typography>

      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 2, fontFamily: "VerveAlt" }}
      >
        How does a player select which locale is active for play?
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ mb: 5, fontFamily: "Soul" }}
      >
        The game will display the language based on which build the user selects
        in the installation process. The game will not have a language-switching
        option in-game, meaning that we have various builds of our game with
        pre-configured language settings. We chose to implement our localization
        in this way to create an easier system set up for the user depending on
        their preferred language choice. In addition, because we have two
        separate builds based on the user’s selected language, we can save space
        in our game's playable build size, meeting the accessibility
        requirements.
      </Typography>
    </div>
  );
}
