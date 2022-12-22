import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import Collections from "../Common/Collections";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTab-root": {
      fontSize: "16px",
      textTransform: "unset",
      overflow: "auto !important",
    },
    "& .MuiTabs-scroller": {
      overflow: "scroll !important",

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CategoryTabs(props) {
  const { categories, collections } = props;

  const classes = useStyles();
  const location = useLocation();

  const [value, setValue] = useState(0);
  const [selectedCat, setSelectedCat] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCat = (cat_id) => {
    console.log(cat_id);
    setSelectedCat(cat_id);
  };

  useEffect(() => {
    if (location.state && categories) {
      categories.forEach((element, index) => {
        if (element.category_id === location.state.data) {
          setValue(index + 1);
          setSelectedCat(element.category_id);
        }
      });
    }
  }, [location.state, categories]);

  return (
    <Box className={classes.root}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label={"All"}
            {...a11yProps(0)}
            onClick={() => handleChangeCat()}
          />
          {categories &&
            categories.map((element, index) => {
              return (
                <Tab
                  key={index}
                  label={element.title}
                  {...a11yProps(index)}
                  onClick={() => handleChangeCat(element.category_id)}
                />
              );
            })}
        </Tabs>
      </Box>
      {categories &&
        categories.map((element, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              {
                <Collections
                  collections={
                    selectedCat
                      ? collections.filter(
                          (list) => list.category_id === selectedCat
                        )
                      : collections
                  }
                />
              }
            </TabPanel>
          );
        })}
    </Box>
  );
}
