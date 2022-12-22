import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useStyles } from "./CollectionStyleDiv";
import { PRIVATE_TESORA_IMAGE_API } from "static/constants";

import { Box, Grid, Skeleton, useMediaQuery } from "@mui/material";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Collections = (props) => {
  const { collections } = props;

  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const match1650 = useMediaQuery("(min-width : 1650px)");
  const match1150 = useMediaQuery("(min-width : 1150px)");
  const match800 = useMediaQuery("(min-width : 800px)");

  const [loading, setLoading] = useState(false);

  const handleCollectionView = (element) => {
    if (location.pathname.includes("collection"))
      navigate(`/collection/view/${element.collection_id}`);
    else
      navigate(`/marketplace/collection`, {
        state: { data: element.collection_id },
      });
  };

  useEffect(() => {
    async function makeRequest() {
      await delay(3000);
      setLoading(true);
    }

    makeRequest();
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.cardList}>
        <Grid container spacing={3}>
          {
            collections &&
            Array.isArray(collections) &&
            collections.length > 0 ? (
              collections?.map((element, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={match1650 ? 3 : match1150 ? 4 : match800 ? 6 : 12}
                  >
                    <Box
                      className={classes.card}
                      onClick={() => handleCollectionView(element)}
                    >
                      <Box className={classes.cardImage}>
                        <Box
                          sx={{
                            backgroundImage: `url(${PRIVATE_TESORA_IMAGE_API}${element.banner})`,
                            backgroundPosition: "top center",
                            backgroundSize: "cover",
                          }}
                          className={classes.bannerImage}
                        />
                        <Box
                          component={"img"}
                          src={`${PRIVATE_TESORA_IMAGE_API}${element.image}`}
                          className={classes.collectionImage}
                        />
                      </Box>
                      <Box className={classes.desc}>
                        <Box className={classes.collectionName}>
                          {element.name}
                        </Box>
                        <Box className={classes.itemCount}>
                          {element.item_count} items
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })
            ) : (
              <Box></Box>
            )
            // :
            // emptyCollection.map((element, index) => {
            //     return (
            //         <Grid key={index} item xs={match1650 ? 3 : match1150 ? 4 : match800 ? 6 : 12}>
            //             <Skeleton animation={'wave'} className={classes.cardContent}>

            //             </Skeleton>
            //         </Grid>
            //     )
            // })
          }
        </Grid>
      </Box>
    </Box>
  );
};

export default Collections;
