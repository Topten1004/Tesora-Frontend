import React, { useState, useEffect, useContext } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetSearchAssets } from 'redux/actions/getData';

import NavBar from 'components/Layouts/NavBar';
import Items from 'components/Common/Items';
import Collections from 'components/Common/Collections';
import { searchContext } from 'utils/context';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        marginTop: '80px',
        "&::-webkit-scrollbar": {
            display: 'none'
        }
    },
    itemField: {
        width: '100%',
        padding: '0px 20px'
    }
}));

const SearchAssets = (props) => {

    const {
        GetSearchAssets,
        items,
    } = props;

    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            GetSearchAssets(location.state.data.searchText)
        }
    }, [location.state])

    return (
        <Box className={classes.root}>
            <NavBar />

            <Box className={classes.itemField}>
                <Items items={items} />
            </Box>
        </Box >
    )
}

const mapStateToProps = state => ({
    items: state.itemView.items
})

const mapDispatchToProps = {
    GetSearchAssets
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAssets);