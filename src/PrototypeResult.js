import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import protoResult from "./assets/crazy.gif";
import anotherResult from "./assets/yessir.gif";

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

export default function PrototypeResult() {
  return (
    <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={anotherResult}
          alt="prototype result"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Push-and-Pull Mechanic Result #1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The GIF above depicts the player's pull movement towards the orange
            cylinder on the screen. As the player moves towards the object, the
            player's gravity will be rotated to match the new setting.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={protoResult}
          alt="another prototype"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Push-and-Pull Mechanic Result #2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The GIF above depicts the player's utilization of the walls and
            orange cylinder to progress further in the game. As the player pulls themselves
            towards the orange cylinder, their gravity is rotated once again to
            match the new setting.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
