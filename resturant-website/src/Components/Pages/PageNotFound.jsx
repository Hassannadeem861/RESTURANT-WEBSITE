import React from "react";
// import Layout from "../Layout";
import { Box, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mt: 20,
          ml: 50,
          p: 10,
          // fontSize: '10px',
          borderRadius: '20px',
          boxShadow: '0px 0px 15px black ',
          fontWeight: "bolder",
          fontFamily: "monospace",
          width: "500px",
          bgcolor: 'black',
          color: 'white'
        }}
      >
        <Typography variant="h4">404 PAGE NOT FOUND</Typography>
      </Box>
    </>
  );
};

export default PageNotFound;
