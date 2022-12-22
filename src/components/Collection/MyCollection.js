import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './StyleDiv/MyCollectionStyleDiv';
import Collections from 'components/Common/Collections';

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import {
    Box, Grid, TextField, Button, InputAdornment
} from '@mui/material';

const MyCollectionForm = (props) => {

    const {
        collections
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.topContent}>
                <Box className={classes.title}>
                    My Collection
                    <Box className={classes.subTitle}>
                        Create, curate, and manage collections of unique NFTs to share and sell.
                    </Box>
                </Box>

                <Button variant='contained'
                    onClick={() => navigate(`/collection/add`)}
                    sx={{ fontSize: '18px !important' }}
                >
                    Create Collection
                </Button>
            </Box>

            <Box className={classes.searchDiv}>
                <TextField
                    placeholder='Search Item Here'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}

                    value={searchText}
                    onChange={(e) => handleChangeSearch(e)}

                />
                <Box className={classes.resetBtn} onClick={() => setSearchText('')}>
                    Reset
                    <svg width="0" height="0">
                        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#29235C" offset="4.17%" />
                            <stop stopColor="#1D71B8" offset="98.23%" />
                        </linearGradient>
                    </svg>

                    <RestartAltIcon style={{ stroke: "url(#blue-gradient)" }} />
                </Box>
            </Box>

            <Collections collections={collections} />
        </Box>
    )
}

export default MyCollectionForm;