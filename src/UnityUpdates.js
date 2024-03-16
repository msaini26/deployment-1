import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import pull_mechanic from "./assets/pull_mechanic.gif";
import splash from "./assets/splash.gif";

export default function UnityUpdates() {
  return (
    <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
      <Card sx={{ maxWidth: "100%"}}>
        <CardMedia
          component="img"
          image={pull_mechanic}
          alt="prototype result"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "VerveAlt" }}
          >
            Pull Mechanic Update
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: "Soul" }}
          >
            The GIF above depicts an updated iteration of our pull mechanic
            utilizing the lamps scattered throughout the hotel.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: "49%" }}>
        <CardMedia
          component="img"
         
          image={splash}
          alt="another prototype"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "VerveAlt" }}
          >
            Updated Splash Experience
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: "Soul" }}
          >
            The GIF above displays the updated splash experience starting from
            the main menu to the gameplay with an integrated color palette as
            well.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
