import React from "react";
import Typography from "@mui/material/Typography";

export default function Accessibility() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, fontFamily: "VerveAlt" }}
      >
        Accessibility
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ mb: 5, fontFamily: "Soul" }}
      >
        Accessibility is a key consideration in the design of Elevator Pitch. We
        have designed our game to be accessible to all players, including those
        with disabilities. We have implemented the following accessibility
        features in our game:
        <ul>
          <i>
            <li>Clear cut identities</li>
            <li>Adjustable game volume</li>
          </i>
        </ul>
      </Typography>
    </div>
  );
}
