import React from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { Link } from 'react-router-dom'
import './Styles/Footer.css'
// import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p:1, pt:3 }}>
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Social Media Icons */}
          {/* <InstagramIcon /> */}
          {/* <FacebookIcon /> */}
          <Link className="link" target="blank" to={'https://github.com/Hassannadeem861?tab=repositories'}><GitHubIcon /></Link>
          <Link className="link" target="blank" to={'https://wa.me/+923164593747'}><WhatsAppIcon /></Link>
          <Link className="link" target="blank" to={'https://www.linkedin.com/in/hassannadeem861/'}><LinkedInIcon/></Link>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Hassan Nadeem
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
