import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  Box,
  Typography,
  TableContainer,
  TableBody,
  TableHead,
} from "@mui/material";
//import { makeStyles } from "@mui/styles";
//import { ThemeProvider, createTheme } from "@mui/system";

/* const useStyles = makeStyles((DefaultTheme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: DefaultTheme.palette.grey[500],
    paddingTop: DefaultTheme.spacing(70),
  },
}));
 */
//const theme = createTheme({});

const MuiTable = (props) => {
  // const classes = useStyles();
  return (
    /* <Container className={classes.root}> */
    <Container sx={{ border: 10, bgcolor: "grey.A700", pt: 5, gap: 10 }}>
      <Paper component={Box} width="30%" p={4} mx="auto">
        <Typography color="secondary" variant="h4">
          Hello Material UI
        </Typography>
      </Paper>
    </Container>
  );
};

export default MuiTable;
