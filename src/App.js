import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PrototypeResult from "./PrototypeResult";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Elevator Pitch {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 5 }}>
          Elevator Pitch Deployment #1
        </Typography>

        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Design Process
        </Typography>

        <PrototypeResult />
    
        <Copyright />
      </Box>
    </Container>
  );
}