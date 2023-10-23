import React, { component } from "react";
import { MenuList } from "../Data/Data";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Layout from "../Layout";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
        {MenuList.map((menu, i) => (
          <Card sx={{maxWidth: '390px', m:2, borderRadius: '10px'}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                 {menu.name}
                </Typography>
                <Typography variant="h5">
                 {menu.descripation}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
