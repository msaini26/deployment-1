import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import english_title from "./assets/local_en.png";
import options_menu from "./assets/local_en_2.png";
import chinese_title from "./assets/local_chinese.png";
import chinese_menu from "./assets/local_chinese_2.png";

export default function LocalImgs() {
  return (
    <>
      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Card>
          <CardMedia component="img" image={chinese_title} alt="title screen" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "SoulSemiBold" }}
            >
              Chinese (Simplified) Title Screen
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardMedia component="img" image={chinese_menu} alt="options menu" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "SoulSemiBold" }}
            >
              Chinese (Simplified) Options Menu
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Card>
          <CardMedia component="img" image={english_title} alt="title screen" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "SoulSemiBold" }}
            >
              US English Title Screen
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardMedia component="img" image={options_menu} alt="options menu" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "SoulSemiBold" }}
            >
              US English Options Menu
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}
