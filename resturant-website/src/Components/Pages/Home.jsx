import React from "react";
import "../Styles/Home.css";
// import video from "../videos/Pepsi.mp4";
import Button from "@mui/material/Button";
import Layout from "../Layout";
import Banner from "../Images/Food.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>

<div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>BEST FOOD IN PAKISTAN</p>
          <Link to={"/menu"}>
            {/* <button className='btn'></button> */}
            <Button
              className="btn"
              variant="contained"
              sx={{
                width: "10em",
                height: "3em",
                borderRadius: "5px",
                fontSize: "1em",
              }}
            >
              ORDER NOW
            </Button>
            ;
          </Link>
        </div>
      </div>
      {/* <video
        src={video}
        alt="Video"
        width={"100%"}
        height={"550vh"}
        autoPlay
        loop
     ></video> */}
    </Layout>
  );
};

export default Home;
