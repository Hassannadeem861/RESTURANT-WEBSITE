import React from "react";
import Layout from "../Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 2,
          pl: 10,
          textAlign: "justify",
          p: 2,
          "& h4": {
            fontWeight: "bolder",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact</Typography>
        <p>
          Since Material UI components are built to function in isolation, they
          don't require any kind of globally scoped styles. For a better user
          experience and developer experience, we recommend adding the following
          globals to your app. Responsive meta tag Material UI is a mobile-first
          component library—we write code for mobile devices first, and then
          scale up the components as necessary using CSS media queries. To
          ensure proper rendering and touch zooming for all devices, add the
          responsive viewport meta tag to your element: Since Material UI
          component library—we write code for mobile devices first, and then
          scale up the components as necessary using CSS media queries. To
          ensure proper rendering and touch zooming for all devices, add the
          responsive viewport meta tag to your element: Since Material UI
        </p>

      </Box>
        {/* TABLE AREA */}
      <Box sx={{m:3, width: '600px', ml:2, '@media (max-width: 600px)':{
          width: '295px',
          '& h4':{
            fontSize: '5em'
          },
      }
      }}>
      <TableContainer component={Paper}>
        <Table aria-label="Conatct table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "black",
                  color: "white",
                  textAlign: "center",
                  // p: 3,
                  fontSize: "1.5em",
                }}
              >
                CONTACT DETAILS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{ color: "blue", pt: 1 }} />
                +923164593747 (toroll free)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                Professionalwebdeveloper123@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CallIcon sx={{ color: "green", pt: 1 }} />
                03164593747
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
