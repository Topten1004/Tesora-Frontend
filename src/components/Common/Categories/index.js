import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./CategoryStyleDiv";

import { Box, Grid, useMediaQuery } from "@mui/material";
import { BASE_URL } from "static/constants";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Categories = (props) => {
  const { categories } = props;

  const classes = useStyles();
  const navigate = useNavigate();
  const match1600 = useMediaQuery("(min-width : 1600px)");
  const match1200 = useMediaQuery("(min-width : 1200px)");
  const match900 = useMediaQuery("(min-width : 900px)");

  const handleCategoryClick = (element) => {
    navigate(`/marketplace`, { state: { data: element.category_id } });
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.cardList}>
        <Grid container spacing={5}>
          {categories?.map((element, index) => {
            return (
              <Grid
                key={index}
                item
                xs={match1600 ? 3 : match1200 ? 4 : match900 ? 6 : 12}
              >
                <Box
                  className={classes.card}
                  onClick={() => handleCategoryClick(element)}
                >
                  <Box
                    component={"img"}
                    src={`${BASE_URL}${element.category_image}`}
                  />
                </Box>
                <Box className={classes.name}>{element.title}</Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;
