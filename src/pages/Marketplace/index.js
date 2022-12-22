import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import {
  GetMarketPlaceItems,
  GetMarketPlaceViewModel,
} from "../../redux/actions/getData";

import CollectionMarketplace from "../../components/Marketplace/CollectionMarketplace";
import Loading from "../../components/Common/Loading";

import { Box, useMediaQuery } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    marginTop: "80px",
  },
}));

const Marketplace = (props) => {
  const { GetMarketPlaceItems } = props;

  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMarketplace() {
      // await GetMarketPlaceItems()
      setLoading(false);
    }

    getMarketplace();
  }, []);

  return (
    <Box className={classes.root} >
      <CollectionMarketplace />

      {loading && <Loading />}
    </Box>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  GetMarketPlaceItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
