import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import Banner_Image from "../../assets/Home/banner.svg";
import { useStyles } from "./StyleDiv/IntroStyleDiv";

import { Box, Button, Grid, useMediaQuery } from "@mui/material";

const Intro = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const match1200 = useMediaQuery("(min-width : 1200px)");
  const match900 = useMediaQuery("(min-width : 900px)");

  const handleChangeNavigate = (url) => {
    navigate(url);
  };

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item
          xs={match1200 ? 4 : match900 ? 5 : 12}
          className={classes.textContainer}
          data-aos="fade-right"
        >
          <Box className={classes.title}>
            The place to discover, <br />collect and sell<br /> extraordinary NFTs
          </Box>
          <Box className={classes.buttonGroup}>
            <Button
              variant="contained"
              onClick={() => handleChangeNavigate("/collection/mycollection")}
              className={classes.createBtn}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleChangeNavigate("/marketplace")}
              data={'Explore'}
            >
            </Button>
          </Box>
        </Grid>
        <Grid item
          xs={match1200 ? 8 : match900 ? 7 : 12}
          className={classes.imageContainer}
          data-aos="fade-left"
        >
          <Box className={classes.bannerImage}>
            <Box component={"img"} src={Banner_Image} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
