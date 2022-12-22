import React, { useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import {
    Box,
    TextField,
    InputAdornment,
    Button,
    Select,
    MenuItem,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    searchDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '30px 0px',

        "& .MuiFormControl-root": {
            width: 'calc(100% - 150px)',

            "& .MuiOutlinedInput-root": {
                height: '40px',
                borderRadius: '10px',
                padding: '0px 10px',

                "& .MuiInputBase-input": {
                    padding: '8px 0px'
                }
            },
            ['@media (max-width:600px)']: {
                width: '300px',
                marginBottom: '0px'
            },
        },
        "& .MuiFormControlLabel-root": {
            marginRight: '50px'
        },

        ['@media (max-width:600px)']: {
            width: '300px',
            display: 'grid',
            justifyItems: 'center',
            gap: '20px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    searchType: {
        "& .MuiSelect-outlined": {
            paddingRight: '32px !important'
        },
        "& .MuiSelect-root": {
            height: '30px'
        }
    }
}))

const SearchBar = (props) => {

    const {
        searchText,
        setSearchText,
        searchType,
        setSearchType,
        searchEnable,
        setSearchEnable
    } = props;

    const classes = useStyles();

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleChangeType = (e) => {
        setSearchType(e.target.value);
    }

    return (

        <Box className={classes.searchDiv}>
            <TextField
                placeholder='Search collections and Items'
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position='end' sx={{ "& .MuiInputBase-root": { height: '32px !important' } }}>
                            {
                                searchType &&
                                <Select
                                    value={searchType}
                                    onChange={(e) => handleChangeType(e)}
                                    className={classes.searchType}
                                >
                                    <MenuItem value={'global'}> Global </MenuItem>
                                    <MenuItem value={'collectionOnly'}> Collection Only </MenuItem>
                                </Select>
                            }
                        </InputAdornment>
                    )
                }}

                value={searchText}
                onChange={(e) => handleChangeSearch(e)}

            />

            <Box>

                <Button
                    variant="contained"
                    onClick={() => setSearchEnable(!searchEnable)}
                >
                    Search
                </Button>
            </Box>
        </Box>
    )
}

export default SearchBar;