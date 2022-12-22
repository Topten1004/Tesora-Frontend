import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { GetItems } from "redux/actions/getData";

import NavBar from "../Layouts/NavBar";
import Items from "../Common/Items";
import MobileNavBar from "../Layouts/NavBar/MobileNavBar";
import { useStyles } from "./StyleDiv/ItemMarketplaceStyleDiv";
import Loading from "components/Common/Loading";

import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import {
  Box,
  TextField,
  Button,
  useMediaQuery,
  InputAdornment,
  Drawer,
} from "@mui/material";

const ItemMarketplace = (props) => {
  const { items, collection_id, filterPrice, GetItems, filterCurrency } = props;

  const classes = useStyles();
  const match900 = useMediaQuery("(min-width : 900px)");

  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleChangeDrawer = (type) => {
    setOpenDrawer(type);
  };

  useEffect(() => {
    if (items) {
      setItemList(items);
    }
  }, [items]);

  useEffect(() => {
    setItemList(null);
    async function getItems() {
      if (filterCurrency) {
        await GetItems(collection_id, filterCurrency);
        setLoading(false);
      }
    }
    getItems();
  }, [filterCurrency]);

  return (
    <Box className={classes.root}>
      <Box className={classes.topImage} />
      <Box sx={{ display: "flex", height: "100%" }}>
        {match900 && <NavBar />}

        <Box className={classes.mainContent}>
          {filterPrice !== "Any" && (
            <Box className={classes.title}>
              Products greater than&nbsp;
              {filterPrice === "GteOne"
                ? 1
                : filterPrice === "GteTen"
                  ? 10
                  : filterPrice === "GteOneHundred"
                    ? 100
                    : filterPrice === "GteOneThousand"
                      ? 1000
                      : 0}
              &nbsp;ETH
            </Box>
          )}

          <Box className={classes.searchDiv}>
            <TextField
              placeholder="Search Item Here"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={searchText}
              onChange={(e) => handleChangeSearch(e)}
            />
            <Box className={classes.resetBtn} onClick={() => setSearchText("")}>
              Reset
              <svg width="0" height="0">
                <linearGradient
                  id="blue-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#29235C" offset="4.17%" />
                  <stop stopColor="#1D71B8" offset="98.23%" />
                </linearGradient>
              </svg>
              <RestartAltIcon style={{ stroke: "url(#blue-gradient)" }} />
            </Box>
          </Box>

          {!match900 && (
            <Box className={classes.filterBtn}>
              <Button
                variant="contained"
                onClick={() => handleChangeDrawer(true)}
              >
                <FilterAltOutlinedIcon />
                Filter
              </Button>
            </Box>
          )}

          {itemList ? (
            itemList.length ? (
              <Items
                items={itemList?.filter(
                  (list) => list.name.toLowerCase().search(searchText) >= 0
                )}
              />
            ) : (
              "oops! empty item"
            )
          ) : (
            ""
          )}
        </Box>

        <Drawer
          anchor="bottom"
          open={openDrawer}
          onClose={() => handleChangeDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <MobileNavBar
            openDrawer={openDrawer}
            handleClose={handleChangeDrawer}
          />
        </Drawer>
      </Box>
      {loading && <Loading />}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  items: state.itemView.items,
  filterPrice: state.filter.filterPrice,
  filterCurrency: state.filter.filterCurrency
});

const mapDispatchToProps = {
  GetItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemMarketplace);
