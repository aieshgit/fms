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
import { DataGrid } from "@mui/x-data-grid";

const MuiDataGrid = (props) => {
  return (
    <Container sx={{ pt: 15 }}>
      <Paper component={Box} width={1} height={700}>
        <DataGrid rows={props.rows} columns={props.columns} />
      </Paper>
    </Container>
  );
};

export default MuiDataGrid;
