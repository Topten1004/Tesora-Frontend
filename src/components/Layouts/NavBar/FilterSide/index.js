import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import {
  SetFilterSortBy,
  SetFilterPrice,
  SetFilterCategory,
} from "redux/actions/filter";

import FilterSortBy from "./FilterSortBy";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";

import { Box } from "@mui/material";

const FilterSide = (props) => {
  const {
    categories,
    SetFilterSortBy,
    SetFilterPrice,
    SetFilterCategory,
    filterSortBy,
    filterPrice,
    filterCategory,
  } = props;

  const params = useParams();

  return (
    <Box>
      <FilterSortBy
        filterSortBy={filterSortBy}
        SetFilterSortBy={SetFilterSortBy}
      />
      <FilterPrice filterPrice={filterPrice} SetFilterPrice={SetFilterPrice} />
      {params && params.id ? (
        <Box />
      ) : (
        <FilterCategory
          categories={categories}
          SetFilterCategory={SetFilterCategory}
        />
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  categories: state.marketPlace.categories,
  filterSortBy: state.filter.filterSortBy,
  filterPrice: state.filter.filterPrice,
  filterCategory: state.filter.filterCategory,
});

const mapDispatchToProps = {
  SetFilterSortBy,
  SetFilterPrice,
  SetFilterCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSide);
