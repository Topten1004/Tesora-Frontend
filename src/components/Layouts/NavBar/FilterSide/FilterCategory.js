import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { GetMarketPlaceViewModel } from "../../../../redux/actions/getData";

import { useStyles } from "../StyleDiv/NavBarStyleDiv";
import { PRIVATE_TESORA_IMAGE_API } from "../../../../static/constants";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Loading from "components/Common/Loading";

const FilterCategory = (props) => {
  const { GetMarketPlaceViewModel, categories, SetFilterCategory } = props;

  const classes = useStyles();

  const [searchText, setSearchText] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChangeAccordion = () => {
    setExpanded(!expanded);
  };

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleCategoryClick = async (element) => {
    if (element === selectedCategory) {
      await SetFilterCategory(0);
      setSelectedCategory(null);
    } else {
      await SetFilterCategory(element);
      setSelectedCategory(element);
    }
  };

  useEffect(() => {
    GetMarketPlaceViewModel();
  }, []);

  return (
    <Accordion expanded={expanded} onChange={() => handleChangeAccordion()}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Categories
      </AccordionSummary>
      <AccordionDetails>
        {selectedCategory !== null && (
          <Button onClick={() => handleCategoryClick(selectedCategory)}>
            Clear Category
          </Button>
        )}

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
        {categories
          ?.filter((list) => list.title.toLowerCase().search(searchText) >= 0)
          .map((element, index) => {
            return (
              <Box
                key={index}
                className={classes.categoryList}
                onClick={() => handleCategoryClick(element.category_id)}
              >
                <Box
                  component={"img"}
                  src={`${PRIVATE_TESORA_IMAGE_API}${element.category_image}`}
                  className={classes.categoryImage}
                />
                <Box
                  className={classes.categoryTitle}
                  sx={{
                    background:
                      element.category_id === selectedCategory
                        ? "linear-gradient(134.69deg, #29235C 2.17%, #1D71B8 98.23%)"
                        : "",
                    color:
                      element.category_id === selectedCategory ? "white" : "",
                  }}
                >
                  {element.title}
                </Box>
              </Box>
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
};

const mapStateToProps = (state) => ({
  categories: state.marketPlace.categories,
});

const mapDispatchToProps = {
  GetMarketPlaceViewModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategory);
