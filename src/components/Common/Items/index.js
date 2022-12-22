import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useStyles } from "./ItemStyleDiv";

import { Box, Grid, IconButton, Stack, useMediaQuery } from "@mui/material";

import { ItemCard } from "../../../shared/ui";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Items = (props) => {
  const { items, removeFav, btnUnfavClicked } = props;

  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const match1650 = useMediaQuery("(min-width : 1650px)");
  const match1150 = useMediaQuery("(min-width : 1150px)");
  const match800 = useMediaQuery("(min-width : 800px)");

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Box className={classes.root}>
      <Box className={classes.cardList}>
        <Grid container spacing={2}>
          {items &&
            items.map((element, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={match1650 ? 3 : match1150 ? 4 : match800 ? 6 : 12}
                >
                  <ItemCard
                    item_id={element.itemId}
                    asset_img={element.media}
                    item_name={element.name}
                    collection_name={element.collection?.name}
                    cat_name={element.category?.category_title}
                    price={element.price}
                    accept_offer={element.acceptOffer}
                    enable_auction={element.enableAuction}
                    itemEvt={{ to: `/item/view/${element.itemId}` }}
                    collectionEvt={{
                      to: `/marketplace/collection`,
                      data: element.collection?.collection_id,
                    }}
                    catEvt={{
                      to: `/marketplace`,
                      data: element.category?.category_id,
                    }}
                    editable={location.pathname.includes("view") && true}
                    priceDisplay={
                      element.priceDisplay
                        ? element.priceDisplay
                        : String(element.price)
                    }
                    removeFav={removeFav}
                    btnUnfavClicked={(e) => btnUnfavClicked(e)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Items;
