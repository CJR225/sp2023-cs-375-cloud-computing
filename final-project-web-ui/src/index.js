import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "bootstrap/scss/bootstrap.scss";
import reportWebVitals from "./reportWebVitals";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          CS 375 - Spring 2023 - Sample UI Application - Christopher Rocco
        </Typography>
        <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
        This is a sample UI application that will be deployed to AWS Cloud Platform. This application simulates a wizard form that has multiple steps available in it.
        As you step through the application, you will see the JSON displayed below.
      </Typography>
      </Box>
    </Container>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
