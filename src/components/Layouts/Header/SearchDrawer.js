import React from "react";

import { useStyles } from "./StyleDiv/SearchStyleDiv";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
} from "@mui/material";

export const SearchDrawer = (props) => {
  const { handleClose } = props;

  const classes = useStyles();

  return (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      className={classes.menuBody}
    >
      <List className={classes.menuDiv}>
        <ListItem
          className={classes.closeDiv}
          onClick={() => handleClose(false)}
        >
          <IconButton>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <ListItem className={classes.searchDiv}>
          <TextField
            fullWidth
            placeholder="Search Item Here"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <FormControlLabel
                    control={
                      <Checkbox
                      // checked={searchType}
                      // onChange={handleSearchType}
                      />
                    }
                    label="Collection Only"
                  />
                </InputAdornment>
              ),
            }}

          // value={searchText}
          // onChange={handleSearchChange}
          />
        </ListItem>
      </List>
    </Box>
  );
};
