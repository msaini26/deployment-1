import React from "react";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import access from "./assets/access.png";

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
        with disabilities. As a result, we made sure to keep clear cut
        identities like signs, distinct shapes, and geometric models. We also
        created an accomodation-driven level design, which is smooth paced, to
        allow the player to move at their own rate. There is ample time to
        digest and rest with nothing technically demanding, just mentally. Part
        of this includes having a visualized cue that encourages the player to
        try out the pull effect on objects in the game environment.
      </Typography>

      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Card>
          <CardMedia component="img" image={access} alt="title screen" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "SoulSemiBold" }}
            >
              Visualized Mouse Option
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}
