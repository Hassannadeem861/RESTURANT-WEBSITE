import React from "react";
import Layout from "../Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my: 3, textAlign: 'center',p:2,
      '& h4':{
        // my: ,
      },
      '& p':{
        textAlign: 'justify'
      },
      '@media (max-width:600px)':{
        m:0,
        // py:1,
       '& h4':{
        my:2,
        fontSize: '20px',
        fontWeight: 'bolder'
       },
       '& p':{
        // my: 1
       }
      }
      }}>
        <Typography variant="h4">WELCOME TO MY RESTURANT</Typography>
        <p>
          Since Material UI components are built to function in isolation, they
          don't require any kind of globally scoped styles. For a better user
          experience and developer experience, we recommend adding the following
          globals to your app. Responsive meta tag Material UI is a mobile-first
          component library—we write code for mobile devices first, and then
          scale up the components as necessary using CSS media queries. To
          ensure proper rendering and touch zooming for all devices, add the
          responsive viewport meta tag to your element:
          Since Material UI components are built to function in isolation, they
          don't require any kind of globally scoped styles. For a better user
          experience and developer experience, we recommend adding the following
          globals to your app. Responsive meta tag Material UI is a mobile-first
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
          component library—we write code for mobile devices first, and then
       
        </p>
        <br/>
        <p>
        Since Material UI components are built to function in isolation, they
          don't require any kind of globally scoped styles. For a better user
          experience and developer experience, we recommend adding the following
          globals to your app. Responsive meta tag Material UI is a mobile-first
          component library—we write code for mobile devices first, and then
          scale up the components as necessary using CSS media queries. To
          ensure proper rendering and touch zooming for all devices, add the
          responsive viewport meta tag to your element:
          Since Material UI components are built to function in isolation, they
          don't require any kind of globally scoped styles. For a better user
          experience and developer experience, we recommend adding the following
          globals to your app. Responsive meta tag Material UI is a mobile-first
          globals to your app. Responsive meta tag Material UI is a mobile-first
          globals to your app. Responsive meta tag Material UI is a mobile-first
          globals to your app. Responsive meta tag Material UI is a mobile-first
          globals to your app. Responsive meta tag Material UI is a mobile-first
          globals to your app. Responsive meta tag Material UI is a mobile-first
        
        </p>
        
      </Box>
    </Layout>
  );
};

export default About;
