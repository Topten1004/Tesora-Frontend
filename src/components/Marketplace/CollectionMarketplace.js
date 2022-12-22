/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { connect } from "react-redux";
import { GetMarketPlaceItems } from "redux/actions/getData";
import { FilterItemsCleanup } from "redux/actions/cleanup";

import { useStyles } from "./StyleDiv/CollectionMarketplaceStyleDiv";
import NavBar from "../Layouts/NavBar";
import Items from "../Common/Items";
import MobileNavBar from "../Layouts/NavBar/MobileNavBar";
import SearchBar from "components/Common/SearchBar";
import Collections from "components/Common/Collections";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import {
  Box,
  Button,
  useMediaQuery,
  Drawer,
} from "@mui/material";

const CollectionMarketplace = (props) => {
  const {
    filterSortBy,
    filterPrice,
    filterCategory,
    filterCurrency,
    filterItems,
    GetMarketPlaceItems,
    FilterItemsCleanup,
  } = props;

  const classes = useStyles();
  const location = useLocation();
  const match900 = useMediaQuery("(min-width : 900px)");

  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("global");
  const [searchEnable, setSearchEnable] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isShowLoadMore, setIsShowLoadMore] = useState(true);
  const [listSearchResult, setListSearchResult] = useState([]);

  const handleChangeDrawer = (type) => {
    setOpenDrawer(type);
  };

  useEffect(() => {
    async function getItems() {
      if (searchText.length > 0) {
        setListSearchResult([]);
      }

      await GetMarketPlaceItems(
        filterSortBy,
        filterPrice,
        location.state?.data ? location.state.data : filterCategory,
        searchText,
        searchType,
        pageNumber,
        filterCurrency
      );
      setLoading(false);
    }
    getItems();
  }, [
    filterSortBy,
    filterPrice,
    filterCategory,
    searchEnable,
    pageNumber,
    searchText,
    filterCurrency
  ]);

  useEffect(() => {
    setPageNumber(0);
    setItemList([]);
  }, [filterCategory, filterPrice, filterSortBy]);

  useEffect(() => {
    // setItemList([]);

    let finalItem;
    if (searchText.length > 0) {
      finalItem = [...listSearchResult];
    } else {
      finalItem = [...itemList];
    }

    setCollectionList([]);
    console.log(filterItems);
    if (filterItems) {
      try {
        if (filterItems.length <= 0) {
          setIsShowLoadMore(false);
        }
      } catch (err) { }

      filterItems.forEach((element) => {
        if (element.cardType === "Item") {
          // setItemList((oldArray) => [...oldArray, element]);
          finalItem.push(element);
        }
        if (element.cardType === "Collection") {
          setCollectionList((oldArray) => [...oldArray, element.collection]);
        }
      });
    }
    if (searchText.length > 0) {
      setListSearchResult((oldArray) => (oldArray = finalItem));
    } else {
      setItemList((oldArray) => (oldArray = finalItem));
    }
  }, [filterItems]);

  useEffect(() => {
    return () => {
      FilterItemsCleanup();
    };
  }, []);

  useEffect(() => {
    console.log(filterCurrency)
  }, [filterCurrency])

  const renderCommonItemList = (arr) => {
    return (
      <Box>
        <Items items={arr} />
        {isShowLoadMore && (
          <Button
            onClick={() => {
              const num = pageNumber + 1;
              setPageNumber(num);
            }}
          >
            Load More
          </Button>
        )}
      </Box>
    );
  };

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

          <SearchBar
            searchText={searchText}
            setSearchText={(e) => {
              setListSearchResult([]);
              setSearchText(e);
              if (e.length <= 0) {
                setItemList([]);
                setPageNumber(0);
              }
            }}
            searchType={searchType}
            setSearchType={setSearchType}
            searchEnable={searchEnable}
            setSearchEnable={setSearchEnable}
          />

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

          {collectionList && <Collections collections={collectionList} />}

          {itemList
            ? itemList.length > 0 && searchText.length <= 0
              ? renderCommonItemList(itemList)
              : ""
            : "oops! empty item"}
          {/* {listSearchResult &&
            listSearchResult.length > 0 &&
            searchText.length > 0 &&
            renderCommonItemList(listSearchResult)} */}
        </Box>

        <Drawer
          anchor="bottom"
          open={openDrawer}
          onClose={() => handleChangeDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <MobileNavBar handleClose={() => handleChangeDrawer(false)} />
        </Drawer>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  filterSortBy: state.filter.filterSortBy,
  filterPrice: state.filter.filterPrice,
  filterCategory: state.filter.filterCategory,
  filterCurrency: state.filter.filterCurrency,
  filterItems: state.itemView.filterItems,
});

const mapDispatchToProps = {
  GetMarketPlaceItems,
  FilterItemsCleanup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionMarketplace);
